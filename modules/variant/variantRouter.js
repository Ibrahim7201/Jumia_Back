const express = require('express');
const variantRouter = express.Router();

const { add } = require('./variantController')
const { remove } = require('./variantController')

const { errorHandler } = require('../middlewares')

variantRouter.post('/', add)
variantRouter.delete('/:id', remove)
variantRouter.use(errorHandler)


module.exports = variantRouter;