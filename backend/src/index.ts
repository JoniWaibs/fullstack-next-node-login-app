import { server } from './app';
import { logger } from './utils/logger';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const PORT = 8080;

/**
 * Launch app
 */
const start = async () => {
  server.listen(PORT, () => logger.info(`Auth Service - Server is listening on ${PORT}`));
};
start();
