import { NextFunction } from 'connect';
import HttpException from '../../../middleware/errorMiddleware/http-exception';
import UserModel from '../../users/entities/users.schema';
import bcrypt from 'bcrypt';
import { body } from 'express-validator';
import { UserDocument } from '../../users/entities/users.entity';

export async function getUserLogin(
    email: string,
    password: string,
    next: NextFunction
) {
    if (!email || !password)
        throw new HttpException({
            statusCode: 400,
            message: 'username or email and password are required',
        });
    console.log(email);
    const user: UserDocument | null = await UserModel.findOne({ email: email });

    if (!user)
        throw new HttpException({
            statusCode: 400,
            message: 'Invalid Email',
            error: 'Masukkan Email yang sesuai',
        });

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword)
        throw new HttpException({
            statusCode: 400,
            message: 'Invalid password',
            error: 'Masukkan password yang sesuai',
        });

    return user;
}
