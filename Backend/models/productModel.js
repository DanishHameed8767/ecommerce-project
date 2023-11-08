const mongoose = require('mongoose');
const { Schema } = mongoose;
const productSchema = new Schema (
    {
        title: String, 
  description: String,
  price: Number,
  discountPercentage: Number,
  longDescription:String,
  rating: Number,
  brand: String,
  stock: Number,
  category: String,
  thumbnail: String,
  images: [ String ]
    }
)

exports.Product = mongoose.model('Product',productSchema);