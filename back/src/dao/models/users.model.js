import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const userCollection = 'users';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    birthday: { type: Date },
    email: { type: String },
    password: { type: String },
    location: {
        city: { type: String },
        municipality: { type: String },
        province: { type: String }
    },
    avatar: [{ type: String }],
    active: { type: Boolean, default: true },
    phone: { type: String },
    role: { type: String, default: 'user' },
    passId: { type: String },
    financeData: { type: String }
});

userSchema.plugin(mongoosePaginate);

export const userModel = mongoose.model(userCollection, userSchema);