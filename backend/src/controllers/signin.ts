import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { users } from '../models/users';
import dotenv from 'dotenv';
import { logger } from '../utils/logger';
import { JWT_SECRET_KEY } from '../enums';

dotenv.config({ path: '.env' });

/**
 * Controller to signin the user
 * @param req - Express req fn
 * @param res - Express res fn
 */
export const signinController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  /**
   * Duplicated user validation
   */
  const user = await users.findUser(email, password);
  if (!user) {
    logger.error('Auth Service - Failed login attempt');
    return res.status(404).json({ errors: [{ message: 'User does not exists, you can create a free account' }] });
  }

  /**
   * Generate JWT and store it on session object
   */
  const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, JWT_SECRET_KEY, {
    expiresIn: 864000,
  });

  logger.info(`Auth Service - User has been logged succesful with data: ${JSON.stringify(user)}`);

  return res.cookie('session', token).status(200).json(user);
};
