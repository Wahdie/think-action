import { BaseUser, UserDocument } from '../../users/entities/users.entity';
import { createToken } from '../services/createToken';
import { getUserLogin } from '../services/getUserLogin';
import { Response, Request, NextFunction } from 'express';
import HttpException from '../../../middleware/errorMiddleware/http-exception';
import jwt from 'jsonwebtoken';
import UserModel from '../../users/entities/users.schema';
import bcrypt from 'bcrypt';

export const login = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { email, password } = req.body;

        let user = await getUserLogin(email, password, next);

        createToken(user, req, res, next);
    } catch (err) {
        next(err);
    }
};

export default login;
