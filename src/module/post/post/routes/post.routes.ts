import express from 'express';
import ResolutionModel from '../entities/resolutions.schema';
import { authUser } from '../../../../middleware/authMiddleware/protect';
import { errorHandler } from '../../../../middleware/errorMiddleware/serverError.handler';
import { notFoundHandler } from '../../../../middleware/errorMiddleware/notFound.handler';
import {
    createResolution,
    updateResolution,
    createGoal,
} from '../controller/post.controller';
import { resolutionValidation } from '../validation/createGoalValidation';
import { updateResolutionValidation } from '../validation/updateResolutionValidation';

export const postRouter = express.Router();

postRouter.use(authUser);
// postRouter.get('/post', categoryController.getAllCategories);
postRouter.post('/resolution', resolutionValidation, createResolution);
postRouter.put('/resolution/:id', updateResolutionValidation, updateResolution);
postRouter.post('/weekly-goal', resolutionValidation, createGoal);
// postRouter.put('/post/:id', categoryController.updateCategory);
// postRouter.delete('/post:id', categoryController.deleteCategory);
postRouter.use(errorHandler);
postRouter.use(notFoundHandler);
