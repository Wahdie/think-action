import express from 'express';
import authController from '../../auth/index';
import { authValidator } from '../validation/auth.validation';
import { errorHandler } from '../../../middleware/errorMiddleware/serverError.handler';
import { notFoundHandler } from '../../../middleware/errorMiddleware/notFound.handler';

export const authRouters = express.Router();

authRouters.post('/register', authValidator, authController.register);
authRouters.post('/login', authValidator[0], authController.login);
authRouters.get('/logout', authController.logout);
authRouters.use(notFoundHandler);
authRouters.use(errorHandler);
