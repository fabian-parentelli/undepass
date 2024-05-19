import mongoose from "mongoose";

const shiftAdminCollection = 'shift_admin';

const shiftAdminSchema = new mongoose.Schema({
    active: { type: Boolean, default: true },
    userId: { type: String }
});

export const shiftAdminModel = mongoose.model(shiftAdminCollection, shiftAdminSchema);