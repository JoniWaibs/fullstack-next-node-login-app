import request from 'supertest';
import { server } from '../app';
import { BASE_API_URL } from '../enums';
import { User } from '../types';
import { Global } from '../types';

declare const global: Global;

/**
 * Signup and returns cookie
 * @param userMock - User obvject
 * @returns cookie
 */
global.signin = async (userMock: User): Promise<string> => {
  const authResponse = await request(server).post(`${BASE_API_URL}/signin`).send(userMock).expect(200);
  const cookie = authResponse.get('Set-cookie');
  return cookie;
};
