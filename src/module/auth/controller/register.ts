import { Request, Response, NextFunction } from 'express';
import createUser from '../services/createUser';
import { BaseUser } from '../../users/entities/users.entity';

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newUser: BaseUser = req.body;
        createUser(newUser, req, res, next);
        
    } catch (err) {
        next(err);
    }
};
