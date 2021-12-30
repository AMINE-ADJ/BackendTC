import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Plan';
const COLLECTION_NAME = 'Plans';

export const planSchema = new mongoose.Schema({
    Plan_Type: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    Plan_Name : {
        type: mongoose.Schema.Types.String,
        required: true
    }, 
    Plan_Produit : { 
        type: mongoose.Schema.Types.String,
        required: true
    }, 
    Plan_Boutique: { 
        type: mongoose.Schema.Types.String,
        required: true
    }, 
    Plan_Price : { 
        type: mongoose.Schema.Types.String,
        required: true
    }, 

    Plan_Mark : { 
        type: mongoose.Schema.Types.String,
        required: true
    }, 
    Plan_DE : { 
        type: mongoose.Schema.Types.String,
        required: true
    }, 
    Plan_Code : { 
        type: mongoose.Schema.Types.String,
        required: true
    }, 
    ITEM_COUNT: {
        type: mongoose.Schema.Types.Number, 
        required: true
    },
    Plan_REG : { 
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


export const PlanModel = mongoose.model(DOCUMENT_NAME, planSchema, COLLECTION_NAME)
