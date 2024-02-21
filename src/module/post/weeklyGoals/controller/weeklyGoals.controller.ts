import { Response, Request, NextFunction } from 'express';
import mongoose from 'mongoose';
import WeeklyModel from '../entity/weeklyGoals.schema';
import { createGoalsService } from '../services/createWeekly.services';
import { updateResolutionService } from '../services/updateResolution.services';
import { BaseGoal } from '../entity/weeklyGoals.entity';
// controllers/categoryController.ts

export const createWeeklyGoals = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const weeklyData: BaseGoal = req.body;
        weeklyData.userId = req.body.user.userId;
        const weeklyGoals = createGoalsService(weeklyData, req, res, next);
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
        const resolution: BaseGoal = req.body;

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
