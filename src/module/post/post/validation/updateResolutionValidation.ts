import { body } from 'express-validator';
import ResolutionModel from '../entities/resolutions.schema';
import HttpException from '../../../../middleware/errorMiddleware/http-exception';

export const updateResolutionValidation = [
    body('name').custom(async (value, { req }) => {
        const id = req.params?.id;
        const duplikat: Object | null = await ResolutionModel.findOne({
            resolution_name: value,
        });
        const oldData = await ResolutionModel.findById(id);

        if (!oldData) {
            throw new HttpException({
                statusCode: 400,
                message: 'Resolusi tidak tersedia',
            });
        }
        const oldResolutionName = oldData.resolution_name;

        if (duplikat && value !== oldResolutionName)
            throw new Error('Resolusi sudah dibuat!');
        return true;
    }),
];
