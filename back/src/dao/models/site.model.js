import mongoose from "mongoose";

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
    ]
});

export const siteModel = mongoose.model(siteCollection, siteSchema);