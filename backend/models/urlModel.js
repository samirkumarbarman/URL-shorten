import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    longURL :{
        type : String,
        required : true,
    },

    shortURL :{
        type : String,
        required : true,
    },
}, { timestamps : true });

const URL = mongoose.model('URL', urlSchema);

export default URL;