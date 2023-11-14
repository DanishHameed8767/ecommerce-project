const { Product } = require("../models/productModel");
const { Sale } = require("../models/saleModel");

exports.getallProducts = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};

exports.addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.send('success');
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
  const arr = req.body;
  try{arr.forEach(async(value)=>{
    const product = value.product;
    if(product){
    await Product.findOneAndUpdate({_id:value.product._id},{stock: value.product.stock - 1},{new: true});
    }
  else{
    await Sale.findOneAndUpdate({_id:value.sale._id},{stock: value.sale.stock - 1},{new: true})
    if(value.sale.saleStock){
      await Sale.findOneAndUpdate({_id:value.sale._id},{saleStock: value.sale.saleStock - 1},{new: true})
    }
  }
  })
  res.json("success");}
  catch(err){
    res.status(400);
  }
};

exports.fetchProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if(!product){
      const sale = await Sale.findById(id);
      res.status(200).json(sale);
      return;
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};
