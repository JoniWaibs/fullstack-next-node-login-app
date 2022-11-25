import express, { Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';
import cookieParser from 'cookie-parser';

import { appRouter } from './router';
import { BASE_API_URL } from './enums';
// import cookieSession from 'cookie-session';

const app = express();

app.use(express.json());

/**
 * Cookie session configs
 */
app.set('trust proxy', true);
app.use(cookieParser());

/**
 * CORS middleware
 */
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

/**
 * Healthcheck service endpoint
 */
app.get(`${BASE_API_URL}/healthcheck`, (_req: Request, res: Response) => res.json({ Info: 'isHealthy' }));

/**
 * App router
 */
app.use(appRouter);

/**
 * NotFound Error when any endpoint does not exist
 */
app.all('*', async (_req: Request, _res: Response) => {
  throw new Error('Endpoint not found');
});

/**
 * Expose server app
 */
export const server = app;
