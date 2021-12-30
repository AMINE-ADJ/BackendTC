import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Couponvisit';
const COLLECTION_NAME = 'couponvisits';

export const couponvisitSchema = new mongoose.Schema({
    PREF_NAME: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    SMALL_AREA_NAME: {
        type: mongoose.Schema.Types.Number, 
        required: true
    },
    COUPON_ID_hash: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    EN_SMALL_AREA_NAME: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    EN_PREF_NAME: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    
}, {
    timestamps: true,
});


export const CouponvisitModel = mongoose.model(DOCUMENT_NAME, couponvisitSchema, COLLECTION_NAME)
