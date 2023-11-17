const { Arrival } = require("../models/arrivalModel");
const { Product } = require("../models/productModel");
const { Sale } = require("../models/saleModel");

exports.getallProducts = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};

exports.addProduct = async (req, res) => {
  try {
    const product = new Product({...req.body, sellCount: 0});
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
    const product = value.product ;
    const arrival = value.arrival;
    if(product){
    await Product.updateOne({_id:value.product._id},{stock: value.product.stock - 1},{new: true});
    await Product.updateOne({_id:value.product._id},{sellCount: value.product.sellCount + 1},{new: true});
  }
  else if(arrival){
    await Arrival.updateOne({_id:value.arrival._id},{stock: value.arrival.stock - 1},{new: true})
    await Arrival.updateOne({_id:value.arrival._id},{sellCount: value.arrival.sellCount + 1},{new: true});
  }
  else{
    await Sale.updateOne({_id:value.sale._id},{stock: value.sale.stock - 1},{new: true})
    await Sale.updateOne({_id:value.sale._id},{sellCount: value.sale.sellCount + 1},{new: true});
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


exports.updateMany = async (req, res) => {

  const products = await Product.updateMany({},{sellCount:0},{new:true});
  res.send(products);
}