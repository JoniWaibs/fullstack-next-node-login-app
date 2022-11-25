import { User, UserMinified } from '../types';
import mockedUsers from '../mocks/users.json';

/**
 * This emulates a Models from DDBB as mongoDB for exambple
 * and that methods, are fake copys of mongoDB metbos
 */
export class Users {
  async findUser(email: string, password: string): Promise<UserMinified | null> {
    const user = mockedUsers.find((user: User) => user.email === email && user.password === password);

    return user ? { id: user.id, email: user.email, name: user.name } : null;
  }
}

/**
 * Expose Fake users model
 */
export const users = new Users();
