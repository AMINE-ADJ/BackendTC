import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Couponlist';
const COLLECTION_NAME = 'couponlists';

export const couponlistSchema = new mongoose.Schema({

    PRICE_RATE: {
        type: mongoose.Schema.Types.String,
        required:true
    },
    CATALOG_PRICE: {
        type: mongoose.Schema.Types.String,
        required:true
    },
    DISCOUNT_PRICE: {
        type: mongoose.Schema.Types.String,
        required:true
    },
    DISPFROM: {
        type: mongoose.Schema.Types.String,
        required:true
    },
    DISPEND: {
        type: mongoose.Schema.Types.String,
        required:true
    },
    DISPPERIOD: {
        type: mongoose.Schema.Types.String,
        required:true
    },
    VALIDFROM: {
        type: mongoose.Schema.Types.String,
        required: false,
        default: 'NA'
    },
    VALIDEND: {
        type: mongoose.Schema.Types.String,
        required: false,
        default: 'NA'
    },
    VALIDPERIOD: {
        type: mongoose.Schema.Types.String,
        required: false,
        default: 'NA'
    },
    USABLE_DATE_MON: {
        type: mongoose.Schema.Types.String,
        required: false,
        default: 'NA'
    },
    USABLE_DATE_TUE: {
        type: mongoose.Schema.Types.String,
        required: false,
        default: 'NA'
    },
    USABLE_DATE_WED: {
        type: mongoose.Schema.Types.String,
        required: false,
        default: 'NA'
    },
    USABLE_DATE_THU: {
        type: mongoose.Schema.Types.String,
        required: false,
        default: 'NA'
    },
    USABLE_DATE_FRI: {
        type: mongoose.Schema.Types.String,
        required: false,
        default: 'NA'  
    },
    USABLE_DATE_SAT: {
        type: mongoose.Schema.Types.String,
        required: false,
        default: 'NA'
    },
    USABLE_DATE_SUN: {
        type: mongoose.Schema.Types.String,
        required: false,
        default: 'NA'
    },
    USABLE_DATE_HOLIDAY: {
        type: mongoose.Schema.Types.String,
        required: false,
        default: 'NA'
    },
    USABLE_DATE_BEFORE_HOLIDAY: {
        type: mongoose.Schema.Types.String,
        required: false,
        default: 'NA'
    },
    COUPON_ID_hash: {
        type: mongoose.Schema.Types.String,
        required:true
    },
    en_capsule: {
        type: mongoose.Schema.Types.String,
        required:true
    },
    en_genre: {
        type: mongoose.Schema.Types.String,
        required:true
    },
    en_small_area: {
        type: mongoose.Schema.Types.String,
        required:true
    },
    en_ken: {
        type: mongoose.Schema.Types.String,
        required:true
    },
    en_large_area: {
        type: mongoose.Schema.Types.String,
        required:true
    },
}, {
    timestamps: true,
});


export const CouponlistModel = mongoose.model(DOCUMENT_NAME, couponlistSchema, COLLECTION_NAME)
