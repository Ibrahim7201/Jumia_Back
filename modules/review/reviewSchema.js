const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    review_text:{
        type:String,
        required:true
    } ,
    rate:{
        type:Number,
        required:true,
    },
    product_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    }
})

module.exports = reviewSchema