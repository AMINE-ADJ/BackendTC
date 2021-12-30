import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Coupondetail';
const COLLECTION_NAME = 'coupondetails';

export const coupondetailSchema = new mongoose.Schema({
    PURCHASE_FLG: {
        type: mongoose.Schema.Types.Number,
        required: true
    },
    I_DATE: {
        type: mongoose.Schema.Types.String, 
        required: true
    },
    PAGE_SERIAL: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    REFERRER_hash: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    VIEW_COUPON_ID_hash: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    USER_ID_hash: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    SESSION_ID_hash: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    PURCHASEID_hash: {
        type: mongoose.Schema.Types.String,
        required: false,
        default:''
    },
}, {
    timestamps: true,
});


export const CoupondetailModel = mongoose.model(DOCUMENT_NAME, coupondetailSchema, COLLECTION_NAME)
