import { body } from 'express-validator';
import ResolutionModel from '../entities/resolutions.schema';

export const resolutionValidation = [
    body('goal_name')
        .isString()
        .notEmpty()
        .withMessage('weekly goal is required'),
    body('resolution_name').custom(async (value) => {
        const duplikat: Object | null = await ResolutionModel.findOne({
            resolution_name: value,
        });
        if (duplikat) {
            throw new Error('Resolution sudah dibuat!');
        }
        return true;
    }),
    body('category').isString().notEmpty().withMessage('Category is required'),
    body('caption').isString().notEmpty().withMessage('caption is required'),
    body('dueDate').notEmpty().withMessage('due Date is required'),
];
