import mongoose, { Schema, Model, Types } from 'mongoose';
import { ObjectId } from 'bson';
import { GoalEntity } from './weeklyGoals.entity';

const WeeklySchema: Schema<GoalEntity> = new mongoose.Schema(
    {
        id: { type: ObjectId },
        goals_name: { type: 'string', required: true },
        userId: { type: 'string', required: true },
        resolutionId: { type: 'string', required: true },
        caption: { type: 'string', required: true },
        photo: [{ type: String, required: false }],
        likers: [{ type: String, required: true, default: [] }],
        comments: [{ type: String, required: true, default: [] }],
        likeCount: { type: 'number', required: true, default: 0 },
        commentCount: { type: 'number', required: true, default: 0 },
        dueDate: { type: 'Date', required: true },
        shareWith: {
            type: 'string',
            enum: ['everyone', 'supporter', 'private'],
            default: 'everyone',
        },
        isComplete: { type: 'boolean', required: false },
        isUpdating: { type: 'boolean', required: false, default: false },
    },
    { timestamps: true }
);

const WeeklyModel = mongoose.model<GoalEntity>('WeeklyGoal', WeeklySchema);

export default WeeklyModel;
