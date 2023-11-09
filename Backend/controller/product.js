const { Product } = require("../models/productModel");

exports.getallProducts = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};

exports.addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.send(product);
  } catch (error) {
    res.send(error);
  }
};

exports.getallProductsByCategory = async (req, res) => {
  const category = req.body.category;
  const products = await Product.find({ category });
  res.send(products);
};
