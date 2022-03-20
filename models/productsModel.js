const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now(),
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  subCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubCategory',
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Discount',
  },
  stock: {
    type: Number,
    default: 0,
  },
  variants: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Variant',
  },
});
