import { ValidationError, validationResult } from 'express-validator';
import express, { Response, Request, NextFunction } from 'express';
import WeeklyModel from '../entity/weeklyGoals.schema';
import HttpException from '../../../../middleware/errorMiddleware/http-exception';

export async function updateResolutionService(
    id: string,
    resolution: any,
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
        const postData = await WeeklyModel.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    resolution_name: resolution.resolution_name,
                    category: resolution.category,
                    caption: resolution.caption,
                    dueDate: resolution.dueDate,
                    shareWith: resolution.shareWith,
                    isUpdating: true,
                },
            }
        );
        res.status(201).json({
            messagae: 'Post updated successfully',
            postData,
        });
    } catch (error) {
        next(error);
    }
}
