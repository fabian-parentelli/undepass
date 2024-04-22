import mongoose from "mongoose";

const contactRespCollection = 'contactresp';

const contactRespSchema = new mongoose.Schema({
    email: { type: String },
    message: { type: String },
    date: { type: String },
    requestId: { type: String },
    affair: { type: String }
});

export const contactRespModel = mongoose.model(contactRespCollection, contactRespSchema);