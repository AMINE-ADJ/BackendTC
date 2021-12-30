import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Couponarea';
const COLLECTION_NAME = 'couponareas';

export const couponareaSchema = new mongoose.Schema({
    PREF_NAME : {
        type: mongoose.Schema.Types.String,
        default:'',
        required: false
    },
    SMALL_AREA_NAME : {
        type: mongoose.Schema.Types.String, 
        required:false,
    },
    COUPON_ID_hash : {
        type: mongoose.Schema.Types.String,
        required:false
    },
    EN_SMALL_AREA_NAME : {
        type: mongoose.Schema.Types.String,
        required: false,
    },
    EN_PREF_NAME : {
        type: mongoose.Schema.Types.String,
        default:'',
        required: false,
    },
    
}, {
    timestamps: true,
});


export const CouponareaModel = mongoose.model(DOCUMENT_NAME, couponareaSchema, COLLECTION_NAME)
