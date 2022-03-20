const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    shipping_address:{
        type:String,
        required:true
    } ,
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    vendor_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    created_at:{
        type: Date,
        default:Date.now()
    },
    updated_at:{
        type: Date,
        default:Date.now()
    },
    order_items:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'orderItem'
    }
})

module.exports = orderSchema