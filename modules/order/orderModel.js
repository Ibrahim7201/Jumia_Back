const orderSchema = require('./orderSchema');
const mongoose = require('mongoose');

const Review = mongoose.model('orders',orderSchema)
module.exports = Review;