const variantSchema = require('./variantSchema');
const mongoose = require('mongoose');

// create table(model) - doctors inside database
const Variant = mongoose.model('variants',variantSchema)

module.exports = Variant;