const orderItemSchema = require('./orderItemSchema');
const mongoose = require('mongoose');

const OrderItem = mongoose.model('orderItems',orderItemSchema)
module.exports = OrderItem;