import { Request, Response, NextFunction } from 'express';
import HttpException from '../../../middleware/errorMiddleware/http-exception';
import { BaseUser } from '../../users/entities/users.entity';
import UserModel from '../../users/entities/users.schema';
import bcrypt from 'bcrypt';
import { validationResult, ValidationError } from 'express-validator';

export default async function (
    newUser: BaseUser,
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
                error: 'Registration Failed',
                message: errorMessage,
                statusCode: 400,
            });
        }
        const hashedPassword = await bcrypt.hash(newUser.password, 10);
        newUser.password = hashedPassword;
        console.log(newUser);
        await UserModel.create(newUser);
        console.log(`User created`);
        console.log(newUser);
        res.status(201).json({
            message: 'Success',
            user: newUser,
        });
    } catch (err) {
        next(err);
    }
}
