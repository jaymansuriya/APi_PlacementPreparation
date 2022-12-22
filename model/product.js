const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  price: String,
  image: String,
  details: String,
  ch:Number
});

module.exports = mongoose.model("products", productSchema);