const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  brand: String,
  stock: Number,
  category: String,
  tags: [String],
  thumbnail: String,
  images: [String],
  sellCount: { type: Number, default: 0 },
  type: { type: String, default: "product" },
  arrivalType: String,
});

exports.Product = mongoose.model("Product", productSchema);
