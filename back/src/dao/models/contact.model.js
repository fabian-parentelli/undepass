import mongoose from "mongoose";

const contactCollection = 'contact';

const contactSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    message: { type: String },
    active: { type: Boolean, default: true },
    date: { type: String },
    responseId: { type: String }
});

export const contactModel = mongoose.model(contactCollection, contactSchema);