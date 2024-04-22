import mongoose from "mongoose";

const userFinanCollection = 'userFinans';

const userFinanSchema = new mongoose.Schema({
    holder: { type: String },
    cuit: { type: String },
    bank: { type: String },
    account: { type: String },
    cbu: { type: String },
    userId: { type: String },
    active: { type: Boolean },
});

export const userFinanModel = mongoose.model(userFinanCollection, userFinanSchema);