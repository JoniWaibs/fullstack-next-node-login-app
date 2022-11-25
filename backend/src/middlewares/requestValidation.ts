import { RequestHandler, Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

import { logger } from '../utils/logger';

/**
 * Validation schema for signin and signup
 * @param req - Express req fn
 * @param res - Express res fn
 * @param next - Express next fn
 * @returns
 */
export const requestValidationMiddleware: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  /**
   * req.body validation
   */
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const serializedErrors = errors.array().map(err => ({
      message: err.msg,
      field: err.param,
    }));

    logger.error(`Auth Service - Request validation format error ${JSON.stringify(serializedErrors)}`);

    return res.status(412).json({ errors: serializedErrors });
  }

  logger.info('Auth Service - Request validation format succesful');

  return next();
};
