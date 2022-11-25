import express from 'express';

import { BASE_API_URL } from '../enums';
import { currentUserMiddleware, requestValidationMiddleware } from '../middlewares';
import { bodyValidatorSchema } from '../utils/validation';
import { currentUserController } from '../controllers/currentUser';
import { signinController } from '../controllers/signin';
import { signoutController } from '../controllers/signout';

const router = express.Router();

/**
 * Commons service endpoints
 *
 * TODO: I could add /signup controller
 */
router.post(`${BASE_API_URL}/signin`, bodyValidatorSchema(), requestValidationMiddleware, signinController);
router.post(`${BASE_API_URL}/signout`, signoutController);
router.get(`${BASE_API_URL}/currentuser`, currentUserMiddleware, currentUserController);

/**
 * Expose router
 */
export const appRouter = router;
