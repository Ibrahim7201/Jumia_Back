const express = require('express');
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;
dotenv.config({ path: './config.env' });

const mongoose = require('mongoose');
const app = express();
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
