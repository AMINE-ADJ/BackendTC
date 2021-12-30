import mongoose from 'mongoose';
const DOCUMENT_NAME = 'User';
const COLLECTION_NAME = 'users';

export const userSchema = new mongoose.Schema({
    AGE: {
        type: mongoose.Schema.Types.Number,
        required: true, 
    },
    PREF_NAME: {
        type: mongoose.Schema.Types.String,
        default:'', 
        required: false
    },
    REG_DATE: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    SEX_ID: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    USER_ID_hash: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
        WITHDRAW_DATE: {
        type: mongoose.Schema.Types.String,
        required: false,
        default: 'NA'
    },
}, {
    timestamps: true,
});


export const UserModel = mongoose.model(DOCUMENT_NAME, userSchema, COLLECTION_NAME)
