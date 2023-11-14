const mongoose = require("mongoose");
const { Schema } = mongoose;

const saleSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  longDescription: String,
  rating: Number,
  brand: String,
  stock: Number,
  category: String,
  subCategory: String,
  thumbnail: String,
  images: [String],
  saleStock: Number,
  saleStarts: Number,
  saleEnds: Number,
  discountPercentage: Number,
});
exports.Sale = mongoose.model("Sale", saleSchema);