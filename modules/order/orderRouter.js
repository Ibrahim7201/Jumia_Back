const express = require('express');
const orderRouter = express.Router();

const { add } = require('./orderController')
const { remove } = require('./orderController')
const { update } = require('./orderController')

const { errorHandler } = require('../middlewares')

orderRouter.post('/', add)
orderRouter.delete('/:id', remove)
orderRouter.patch('/:id', update)
orderRouter.use(errorHandler)


module.exports = orderRouter;