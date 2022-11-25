import { RequestHandler, Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UserMinified } from '../types';
import dotenv from 'dotenv';
import { logger } from '../utils/logger';
import { JWT_SECRET_KEY } from '../enums';

dotenv.config({ path: '.env' });

declare module 'express-serve-static-core' {
  interface Request {
    currentUser?: UserMinified;
  }
}

/**
 * Validate user session (with jwt)
 * @param req - Express req fn
 * @param _res - Express res fn
 * @param next - Express next fn
 * @returns
 */
export const currentUserMiddleware: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  /**
   * Validate if cookie does exists
   */
  if (!req.cookies.session) {
    logger.info('Auth Service - Cookie session does not exists');
    return next();
  }

  try {
    /**
     * Verify JWT
     */
    const payload = jwt.verify(req.cookies.session, JWT_SECRET_KEY) as UserMinified;
    req.currentUser = payload;

    logger.info('Auth Service - Cookie session has been created successful');
  } catch (error) {}

  next();
};
