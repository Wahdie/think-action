import { Response, Request, NextFunction } from 'express';
import { createGoalService } from '../services/createGoals.services';
import { createResolutionService } from '../services/createResolution.services copy';
import { updateResolutionService } from '../services/updateResolution.services';
import { BasePost } from '../entities/resolutions.entity';
// controllers/categoryController.ts

export const createResolution = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const resolutionData: BasePost = req.body;
        resolutionData.userId = req.body.user.userId;
        const resolution = createResolutionService(
            resolutionData,
            req,
            res,
            next
        );
    } catch (error: any) {
        next(error);
    }
};
export const createGoal = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const resolutionData: BasePost = req.body;
        resolutionData.userId = req.body.user.userId;
        const resolution = createGoalService(resolutionData, req, res, next);
    } catch (error: any) {
        next(error);
    }
};
export const getAllPostUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {};

export const updateResolution = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = req.params.id;
        const resolution: BasePost = req.body;

        const resolutionUpdate = updateResolutionService(
            id,
            resolution,
            req,
            res,
            next
        );
    } catch (error) {
        next(error);
    }
};
