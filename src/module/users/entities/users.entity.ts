import { ObjectId, Types } from 'mongoose';

export interface BaseUser {
    email: string;
    password: string;
}

interface SupportRequest {
    fromUser: Types.ObjectId;
    status: 'pending' | 'accepted' | 'rejected';
}

interface UserEntity extends BaseUser {
    id?: ObjectId;
    fullname: string;
    bio: string;
    isPublic: boolean;
    supporters: string[] | ObjectId[];
    supporting: string[] | ObjectId[];
    support_request: SupportRequest[];
    picture: string;
    goals: number;
    goals_performances: number;
    language: string;
    total_supporters: number;
    total_supportings: number;
}

export interface UserDocument extends UserEntity, Document {}
