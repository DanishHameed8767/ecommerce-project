const { Product } = require("../models/productModel");

exports.getallProducts = async (req, res) => {
  const type = req.query.type;
  const products = await Product.find({type});
  res.send(products);
};

exports.getProductsByType = async (req, res) => {
  const type = req.query.type;
  const products = await Product.find({type});
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


exports.addProductMany = async (req, res) => {
  try {
    console.log(req.body);
    const product = Product.insertMany(req.body);
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
    await Product.updateOne({_id:value.product._id},{stock: value.product.stock - value.quantity},{new: true});
    await Product.updateOne({_id:value.product._id},{sellCount: value.product.sellCount + value.quantity},{new: true});
  })
  res.json("success");}
  catch(err){
    res.status(400);
  }
};

exports.fetchProductById = async (req, res) => {
  const id = req.params.id;
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

  const products = await Product.updateMany({category:req.body.oldCat},{category:req.body.newCat,subCategory:req.body.oldCat},{new:true});
  res.send(products);
}

exports.searchProducts = async (req, res) => {
  const keyword = req.query.q;
  const regex = new RegExp(keyword, 'i');

// Mongoose query to search products based on keywords
const searchQuery = {
  $or: [
    { title: { $regex: regex } },
    { description: { $regex: regex } },
    { category: { $regex: regex } },
    { subCategory: { $regex: regex } },
    { brands: { $regex: regex } },
  ],
};
try{
  const products = await Product.find(searchQuery);
  res.send(products)
} catch(error){
  res.status(400).send({error});
}

};


exports.updateArrival = async (req, res) => {
  const product_id = req.body._id;
  const update = { ...req.body };
  try {
    await Product.findOneAndUpdate({ _id: product_id }, update, { new: true });
    res.status(200).send({ ...req.body });
  } catch (error) {
    res.status(400).send({
      message: "Bad request",
    });
  }
};