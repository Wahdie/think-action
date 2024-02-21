import { ValidationError, validationResult } from 'express-validator';
import { BasePost } from '../entities/resolutions.entity';
import PostModel from '../entities/resolutions.schema';
import express, { Response, Request, NextFunction } from 'express';
import HttpException from '../../../../middleware/errorMiddleware/http-exception';

export async function createGoalService(
    post: any,
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
        post.type = 'weeklyGoals';
        post.createdAt = date;
        post.updatedAt = date;

        const postData = await PostModel.create(post);
        res.status(201).json({
            messagae: 'Post created successfully',
            postData,
        });
    } catch (error) {
        next(error);
    }
}
