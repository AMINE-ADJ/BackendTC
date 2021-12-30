import mongoose from 'mongoose';
const DOCUMENT_NAME = 'PrefLoc';
const COLLECTION_NAME = 'preflocs';

export const preflocSchema = new mongoose.Schema({
    PREF_NAME: {
        type: mongoose.Schema.Types.String,
        default:'',
        required: false
    },
    PREFECTUAL_OFFICE: {
        type: mongoose.Schema.Types.String,
        default:'', 
        required: false
    },
    LATITUDE: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    LONGITUDE: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    EN_PREF_NAME: {
        type: mongoose.Schema.Types.String,
        default:'',
        required: false,
    },
    EN_PREFECTUAL_OFFICE: {
        type: mongoose.Schema.Types.String,
        required: false,
        default:''
    },
}, {
    timestamps: true,
});


export const PreflocModel = mongoose.model(DOCUMENT_NAME, preflocSchema, COLLECTION_NAME)
