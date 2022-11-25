import { User } from './users';

/**
 * Global types
 */
export interface Global {
  signin: (userMock: Pick<User, 'email' | 'password'>) => Promise<string>;
}
