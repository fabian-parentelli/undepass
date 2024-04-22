import mongoose from "mongoose";

const imgEventCollection = 'imgevent';

const imgEventSchema = new mongoose.Schema({
    component: { type: String },
    style: { type: String },
    imagesUrl: { type: String },
    name: { type: String },
    category: { type: String },
    active: { type: Boolean, default: true }
});

export const imgEventModel = mongoose.model(imgEventCollection, imgEventSchema);