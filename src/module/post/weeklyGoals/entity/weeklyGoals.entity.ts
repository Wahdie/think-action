import { ObjectId, Types } from 'mongoose';

export interface BaseGoal {
    goals_name: string;
    resolutionId: string;
    userId?: string;
    caption: string;
    photo?: string;
    shareWith?: 'everyone' | 'supporter' | 'private';
    dueDate?: Date | string;
}

export interface GoalEntity extends BaseGoal {
    id?: string;
    likers: string[];
    comments: string[];
    likeCount?: number;
    commentCount?: number;
    isComplete?: boolean;
    isUpdating?: boolean;
}

// export interface UserDocument extends UserEntity, Document {}
