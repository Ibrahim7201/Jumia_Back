const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    } ,
    values:{
        type:[String],
        required:true,
    },
    category_ids:{
        type: [mongoose.Schema.Types.ObjectId],
        required:true
    }
})

module.exports = variantSchema