import request from 'supertest';

import { server } from '../../app';
import { BASE_API_URL } from '../../enums';
import { User } from '../../types';
import mockedUsers from '../../mocks/users.json';

describe('signin controller methods', () => {
  let expected: any;
  let baseUrl: string;
  let userMock: Partial<User>;

  const [firstUserMocked] = mockedUsers;

  beforeEach(() => {
    baseUrl = `${BASE_API_URL}/signin`;
    userMock = {
      email: firstUserMocked.email,
      password: firstUserMocked.password,
    };
  });

  test('returns a 200 on successful signin with valid user and sets cookie session as header', async () => {
    const response = await request(server).post(baseUrl).send(userMock);

    expect(response.status).toEqual(200);

    expect(response.body.email).toEqual(userMock.email);
    expect(response.body.id).toBeDefined();
    expect(response.get('Set-cookie')).toBeDefined();
  });

  test('returns error when user does not exists on DDBB', async () => {
    userMock = {
      email: 'fake@test.com',
      password: 'fakepassword',
    };

    expected = { errors: [{ message: 'User does not exists, you can create a free account' }] };

    const response = await request(server).post(baseUrl).send(userMock);
    expect(response.status).toEqual(404);
    expect(response.text).toEqual(JSON.stringify(expected));
  });

  test('returns a 412 with an invalid email', async () => {
    userMock.email = '';

    expected = {
      errors: [
        {
          message: 'Email must be valid',
          field: 'email',
        },
      ],
    };

    const response = await request(server).post(baseUrl).send(userMock);
    expect(response.status).toEqual(412);
    expect(response.text).toEqual(JSON.stringify(expected));
  });

  test('returns a 412 with an empty password', async () => {
    (userMock.password = ''),
      (expected = {
        errors: [
          {
            message: 'Password must be at least 6 characters',
            field: 'password',
          },
        ],
      });

    const response = await request(server).post(baseUrl).send(userMock);
    expect(response.status).toEqual(412);
    expect(response.text).toEqual(JSON.stringify(expected));
  });

  test('returns a 412 with missing email and password', async () => {
    userMock = {
      email: '',
      password: '',
    };

    expected = {
      errors: [
        {
          message: 'Email must be valid',
          field: 'email',
        },
        {
          message: 'Password must be at least 6 characters',
          field: 'password',
        },
      ],
    };

    const response = await request(server).post(baseUrl).send(userMock);
    expect(response.status).toEqual(412);
    expect(response.text).toEqual(JSON.stringify(expected));
  });
});
