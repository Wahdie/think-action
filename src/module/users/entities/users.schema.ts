import mongoose, { Schema, Model, Types } from 'mongoose';
import { UserDocument } from './users.entity';
import { ObjectId } from 'bson';

const UserSchema: Schema<UserDocument> = new mongoose.Schema({
    id: { type: ObjectId },
    email: { type: 'string', required: true, unique: true },
    password: { type: 'string', required: true },
    fullname: { type: 'string', required: false },
    bio: { type: 'string', required: false },
    isPublic: {
        type: 'boolean',
        required: true,
        default: true,
    },
    goals: { type: 'number', required: false },
    supporters: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    supporting: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    support_request: [
        {
            fromUser: { type: Schema.Types.ObjectId, ref: 'User' },
            status: String,
        },
    ],
    total_supporters: { type: 'number', required: true, default: 0 },
    total_supportings: { type: 'number', required: true, default: 0 },
    picture: [{ type: String }],
    goals_performances: { type: Number, default: 0 },
    language: {
        type: String,
        enum: ['Indonesia', 'English'],
        default: 'Indonesia',
    },
});

const UserModel = mongoose.model<UserDocument>('User', UserSchema);

export default UserModel;
