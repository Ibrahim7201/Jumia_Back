const express = require('express');
const orderItemRouter = express.Router();

const { add } = require('./orderItemController')
const { remove } = require('./orderItemController')

const { errorHandler } = require('../middlewares')

orderItemRouter.post('/', add)
orderItemRouter.delete('/:id', remove)
orderItemRouter.use(errorHandler)


module.exports = orderItemRouter;