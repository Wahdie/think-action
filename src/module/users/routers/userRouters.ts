import express from 'express';
import authController from '../../auth/index';
import { notFoundHandler } from '../../../middleware/errorHandler/notFound.handler';
import { errorHandler } from '../../../middleware/errorHandler/serverError.handler';
import { registerValidator } from '../../auth/validation/register.validation';

export const userRouter = express.Router();

userRouter.post('/register', registerValidator, authController.register);
userRouter.post('/login', authController.login);
userRouter.get('/logout', authController.logout);
userRouter.use(notFoundHandler);
userRouter.use(errorHandler);
