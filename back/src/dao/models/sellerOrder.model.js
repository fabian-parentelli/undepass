import mongoose from "mongoose";

const sellerOrderCollection = 'sellerOrder';

const sellerOrderSchema = new mongoose.Schema({
    orderId: { type: String },
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    active: { type: Boolean, default: true },
    cart: [
        {
            productId: { type: String },
            eventId: { type: String },
            ticketId: { type: String },
            quantity: { type: Number },
            price: { type: Number },
            is: { type: String },
            payIn: {
                active: { type: Boolean, default: false },
                date: { type: Date }
            },
            payOut: {
                active: { type: Boolean, default: false },
                date: { type: Date }
            }
        }
    ],
    active: { type: Boolean, default: true },
    date: { type: Date }
});

const autoPopulateUser = function (next) {
    this.populate('buyerId');
    this.populate('sellerId');
    next();
};

sellerOrderSchema.pre('find', autoPopulateUser);
sellerOrderSchema.pre('findOne', autoPopulateUser);
sellerOrderSchema.pre('findById', autoPopulateUser);

export const sellerOrderModel = mongoose.model(sellerOrderCollection, sellerOrderSchema);