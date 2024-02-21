import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import HttpException from '../errorMiddleware/http-exception';

export const authUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        // const token = req.header("Authorization");
        const token = req.cookies.jwt;
        console.log(token);
        if (!token)
            throw new HttpException({
                statusCode: 401,
                error: 'Anda belum login. Silakan Login terlebih dahulu',
                message: 'Unauthorized',
            });

        jwt.verify(token, process.env.SECRET_KEY!, (err: any, user: any) => {
            if (err)
                throw new HttpException({
                    statusCode: 403,
                    error: 'Periksa Token',
                    message: 'Invalid token',
                });
            req.body.user = user;
        });
        next();
    } catch (err) {
        next(err);
    }
};
