const mongoose = require('mongoose');
const validator = require('validator');
const usersSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, 'Mail is required'],
    validate: [validator.isEmail, 'Enter a valid Email'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  passwordChangedAt: {
    type: Date,
  },
  role: {
    type: String,
    enum: ['admin', 'user', 'vendor'],
    default: 'user',
  },
  photo: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  orders: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Orders',
  },
  registerDate: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model('User', usersSchema);

module.exports = User;
