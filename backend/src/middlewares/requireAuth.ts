import { RequestHandler, Request, Response, NextFunction } from 'express';

/**
 * Verify if user has authenticated, if not it will launch an error
 * @param req - Express req fn
 * @param res - Express res fn
 * @param next - Express next fn
 */
export const requireAuthMiddleware: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  if (!req.currentUser) return res.status(403).json({ errors: [{ message: 'Unauthorized' }] });

  return next();
};
