import { ObjectId, Types } from 'mongoose';

export interface BasePost {
    resolution_name: string;
    goal_name: string;
    category: string;
    caption: string;
    userId?: string;
    photo?: string;
    shareWith?: 'everyone' | 'supporter' | 'private';
    dueDate?: Date | string;
}

export interface PostEntity extends BasePost {
    id?: string;
    type?: 'resolution' | 'weeklyGoals' | 'completedGoals';
    likers: string[];
    comments: string[];
    likeCount?: number;
    commentCount?: number;
    isComplete?: boolean;
    isUpdating?: boolean;
}

// export interface UserDocument extends UserEntity, Document {}
