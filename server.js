const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const morgan = require("morgan")
const port = process.env.PORT || 3000;
dotenv.config({ path: './config.env' });

const api = process.env.API_URL

const variantRouter = require('./modules/variant/variantRouter')
const reviewRouter = require('./modules/review/reviewRouter')
const orderRouter = require('./modules/order/orderRouter')
const orderItemRouter = require('./modules/orderItem/orderItemRouter')

const mongoose = require('mongoose');
const app = express();

app.use(cors())

// for displaying http requests on the console 
app.use(morgan('combined'))
app.use(express.json());
app.use(express.urlencoded())

app.use(`${api}/variant`, variantRouter)
app.use(`${api}/review`, reviewRouter)
app.use(`${api}/order`, orderRouter)
app.use(`${api}/orderItem`, orderItemRouter)
main();
async function main() {
  try {
    mongoose.connect(process.env.DATABASE_LOCAL);
  } catch (err) {
    console.log(err.message);
  }
}
app.listen(port, () => {
  console.log(`App listens on ${port}`);
});
