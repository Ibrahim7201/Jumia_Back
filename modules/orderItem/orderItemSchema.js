const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    quantity:{
        type:Number,
        required:true
    },
    delivered:{
        type:Boolean,
        default:false
    },
    canceled:{
        type:Boolean,
        default:false
    },
    paid:{
        type:Boolean,
        default:false
    },
    cash_on_delivery:{
        type:Boolean,
        default:false
    },
    on_the_way:{
        type:Boolean,
        default:false
    },
    returned:{
        type:Boolean,
        default:false
    }
})

module.exports = orderItemSchema