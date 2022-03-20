const express = require('express');
const reviewRouter = express.Router();

const { add } = require('./reviewController')
const { remove } = require('./reviewController')
const { update } = require('./reviewController')

const { errorHandler } = require('../middlewares')

reviewRouter.post('/', add)
reviewRouter.delete('/:id', remove)
reviewRouter.patch('/:id', update)
reviewRouter.use(errorHandler)


module.exports = reviewRouter;