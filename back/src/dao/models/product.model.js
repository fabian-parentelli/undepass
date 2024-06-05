import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const productCollection = 'product';

const productSchema = new mongoose.Schema({
    userId: { type: String },
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    quantity: { type: Number },
    img: [
        {
            imgUrl: { type: String },
            imgName: { type: String },
            active: { type: Boolean },
        }
    ],
    date: { type: Date },
    location: {
        city: { type: String },
        municipality: { type: String },
        province: { type: String },
    },
    active: { type: Boolean, default: true },
    inSite: { type: Boolean, default: true }
});

productSchema.plugin(mongoosePaginate);

export const productModel = mongoose.model(productCollection, productSchema);