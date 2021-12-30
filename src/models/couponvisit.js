import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Couponvisit';
const COLLECTION_NAME = 'couponvisits';

export const couponvisitSchema = new mongoose.Schema({
    PURCHASE_FLG: {
        type: mongoose.Schema.Types.String,
        required:false,
    },
    I_DATE: {
        type: mongoose.Schema.Types.String, 
        required:false,
    },
    PAGE_SERIAL: {
        type: mongoose.Schema.Types.String,
        required:false,
    },
    REFERRER_hash: {
        type: mongoose.Schema.Types.String,
        required:false,
    },
    VIEW_COUPON_ID_hash: {
        type: mongoose.Schema.Types.String,
        required:false,
    },
    USER_ID_hash: {
        type: mongoose.Schema.Types.String,
        required:false,
    },
    SESSION_ID_hash: {
        type: mongoose.Schema.Types.String,
        required:false,
    },
    PURCHASEID_hash: {
        type: mongoose.Schema.Types.String,
        required: false,
        // default:''
    },
}, {
    timestamps: true,
});


export const CouponvisitModel = mongoose.model(DOCUMENT_NAME, couponvisitSchema, COLLECTION_NAME)
