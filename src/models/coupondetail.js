import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Coupondetail';
const COLLECTION_NAME = 'coupondetails';

export const coupondetailSchema = new mongoose.Schema({
    SMALL_AREA_NAME: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    ITEM_COUNT: {
        type: mongoose.Schema.Types.Number, 
        required: true
    },
    I_DATE: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    PURCHASEID_hash: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    USER_ID_hash: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    COUPON_ID_hash: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    en_SMALL_AREA_NAME: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
}, {
    timestamps: true,
});


export const CoupondetailModel = mongoose.model(DOCUMENT_NAME, coupondetailSchema, COLLECTION_NAME)
