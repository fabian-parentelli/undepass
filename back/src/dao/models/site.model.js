import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const siteCollection = 'sites';

const siteSchema = new mongoose.Schema({
    title: { type: String },
    userId: { type: String },
    url: { type: String },
    img: [
        {
            name: { type: String },
            folderName: { type: String },
            url: { type: String }
        }
    ],
    dark: { type: Boolean, default: false },
    info: [
        {
            text: { type: String },
            content: { type: String },
        }
    ],
    videos: [{ type: String }],
    events: [
        {
            eventId: { type: String },
            active: { type: Boolean, default: true },
        }
    ],
    active: { type: Boolean, default: true },
    category: { type: String },
    email: { type: String },
    location: {
        city: { type: String },
        municipality: { type: String },
        province: { type: String },
    },
    phone: { type: String },
    socialNetworks: {
        facebook: { type: String },
        instagram: { type: String },
        spotify: { type: String },
        tiktok: { type: String },
        twitter: { type: String },
        youtube: { type: String },
    },
    shift: {
        active: { type: Boolean, default: false },
        shiftId: { type: String },
    },
    likeCount: [{ type: String, default: [] }],
    favorites: [
        {
            userId: { type: String },
            active: { type: Boolean, default: true },
        }
    ]
});

siteSchema.plugin(mongoosePaginate);

export const siteModel = mongoose.model(siteCollection, siteSchema);