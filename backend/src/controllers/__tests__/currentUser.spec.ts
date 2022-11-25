import request from 'supertest';

import { server } from '../../app';
import { BASE_API_URL } from '../../enums';
import { User } from '../../types';
import { Global } from '../../types';
import mockedUsers from '../../mocks/users.json';

declare const global: Global;

describe('currentUser controller methods', () => {
  let expected: any;
  let baseUrl: string;
  let userMock: Pick<User, 'email' | 'password'>;

  const [firstUserMocked] = mockedUsers;

  beforeEach(() => {
    baseUrl = `${BASE_API_URL}/currentuser`;
    userMock = {
      email: firstUserMocked.email,
      password: String(firstUserMocked.password),
    };
  });

  test('returns data from current-user', async () => {
    const cookie = await global.signin(userMock);

    /**
     * Get current-user data
     */
    expected = {
      email: 'Sincere@april.biz',
    };
    const response = await request(server).get(baseUrl).set('Cookie', cookie).send();
    expect(response.status).toEqual(200);
    expect(response.body.currentUser.email).toEqual(expected.email);
  });

  test('returns null when cookie if user is not authenticated', async () => {
    /**
     * Get current-user data
     */
    expected = {
      email: 'Sincere@april.biz',
    };
    const response = await request(server).get(baseUrl);
    expect(response.status).toEqual(200);
    expect(response.body.currentUser).toBeNull();
  });
});
