import { Request, Response } from 'express';
import { logger } from '../utils/logger';

/**
 * Controller signout user
 * @param req - Express req fn
 * @param res - Express res fn
 */
export const signoutController = (req: Request, res: Response) => {
  logger.info(`Auth Service - User has closed session`);

  /**
   * Destroy cookie
   */
  res.clearCookie('session').json({});
};
