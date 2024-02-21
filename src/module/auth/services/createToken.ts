import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const createToken = (
    user: any,
    req: Request,
    res: Response, 
    next: NextFunction
) => {
    try {
        const key: any = process.env.SECRET_KEY;
        const token = jwt.sign({ userId: user._id }, key, {
            expiresIn: '24h',
        });

        const cookieOptions = {
            // expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            httpOnly: true,
            secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
        };
        res.cookie('jwt', token, cookieOptions);

        user.password = '';
        res.status(200).json({
            token,
            user: user,
        });
    } catch (err) {
        next(err)
    }
};
