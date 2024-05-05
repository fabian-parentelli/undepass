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
    events: [{ type: String }]
});

siteSchema.plugin(mongoosePaginate);

export const siteModel = mongoose.model(siteCollection, siteSchema);