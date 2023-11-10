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

exports.updateProducts = async (req, res) => {
  const find_cat = req.body.cat;
  const product_category = req.body.category;
  const product_subCategory = req.body.subCategory;
  const products = await Product.updateMany({category:find_cat },{category:product_category,subCategory:product_subCategory},{new:true});
  res.send(products);
}


exports.fetchProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};