import request from 'supertest';

import { server } from '../../app';
import { BASE_API_URL } from '../../enums';
import { User } from '../../types';
import mockedUsers from '../../mocks/users.json';

describe('signout controller methods', () => {
  let expected: any;
  let baseUrl: string;
  let userMock: Partial<User>;

  const [firstUserMocked] = mockedUsers;

  beforeEach(() => {
    baseUrl = `${BASE_API_URL}/signout`;
    userMock = {
      email: firstUserMocked.email,
      password: firstUserMocked.password,
    };
  });

  test('returns a 200 on successful signin with valid user and sets cookie session as header and signin', async () => {
    /**
     * Signup and mock a valid user
     */
    await request(server).post(`${BASE_API_URL}/signin`).send(userMock).expect(200);

    /**
     * Signout
     */
    expected = {};
    const response = await request(server).post(baseUrl).send({}).expect(200);
    expect(response.get('Set-cookie')).toEqual(['session=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT']);
    expect(response.body).toEqual(expected);
  });
});
