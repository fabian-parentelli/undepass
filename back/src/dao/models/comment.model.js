import mongoose from "mongoose";

const commentCollection = 'comment';

const commentSchema = new mongoose.Schema({
    userId: { type: String },
    message: { type: String },
    type: { type: String },
    siteId: { type: String },
    date: { type: Date },
    active: { type: Boolean, default: true },
});

export const commentModel = mongoose.model(commentCollection, commentSchema);