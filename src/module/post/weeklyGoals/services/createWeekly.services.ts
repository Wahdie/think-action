import { ValidationError, validationResult } from 'express-validator';
import express, { Response, Request, NextFunction } from 'express';
import WeeklyModel from '../entity/weeklyGoals.schema';
import HttpException from '../../../../middleware/errorMiddleware/http-exception';

export async function createGoalsService(
    weeklyGoals: any,
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const errors: any = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessage: string[] = errors
                .array()
                .map((err: ValidationError) => err.msg);
            throw new HttpException({
                error: 'Post Failed',
                message: errorMessage,
                statusCode: 400,
            });
        }
        const date = Date.now();
        weeklyGoals.createdAt = date;
        weeklyGoals.updatedAt = date;

        const postData = await WeeklyModel.create(weeklyGoals);
        res.status(201).json({
            messagae: 'Post created successfully',
            postData,
        });
    } catch (error) {
        next(error);
    }
}
