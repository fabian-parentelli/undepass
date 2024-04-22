import mongoose from "mongoose";

const avatarCollection = 'avatar';

const avatarSchema = new mongoose.Schema({
    avatarName: { type: String },
    avatarUrl: { type: String },
    active: { type: Boolean, default: true }
});

export const avatarModel = mongoose.model(avatarCollection, avatarSchema);