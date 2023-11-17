const mongoose = require("mongoose");
const { Schema } = mongoose;
const arrivalSchema = new Schema({
  type: String,
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  longDescription: String,
  stock: Number,
  category: String,
  subCategory: String,
  thumbnail: String,
  images: [String],
  sellCount: Number,
});

exports.Arrival = mongoose.model("Arrival", arrivalSchema);
