const mongoose = require('mongoose');
const scgSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  products: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
});

const SubCategory = mongoose.model('SubCategory', scgSchema);
module.exports = SubCategory;
