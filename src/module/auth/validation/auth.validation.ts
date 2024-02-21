import { body } from 'express-validator';
import UserModel from '../../users/entities/users.schema';

export const authValidator = [
    body('email').notEmpty().isEmail().withMessage('Email is required'),
    body('email').custom(async (value) => {
        const duplikat: Object | null = await UserModel.findOne({
            email: value,
        });
        if (duplikat) {
            throw new Error('Email sudah digunakan!');
        }
        return true;
    }),

    body('password')
        .notEmpty()
        .isLength({ min: 8 })
        .withMessage('Password minimal mengandung 8 karakter'),
];
