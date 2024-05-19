import mongoose from "mongoose";

const videoTutCollection = 'videotutorial';

const videoTutSchema = new mongoose.Schema({
    name: { type: String },
    url: { type: String },
    title: { type: String },
    active: { type: Boolean, default: true }
});

export const videoTutModel = mongoose.model(videoTutCollection, videoTutSchema);