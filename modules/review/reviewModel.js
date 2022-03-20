const reviewSchema = require('./reviewSchema');
const mongoose = require('mongoose');

// create table(model) - doctors inside database
const Review = mongoose.model('reviews',reviewSchema)

module.exports = Review;