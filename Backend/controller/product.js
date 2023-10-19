const { Product } = require('../models/productModel');
const data = require('./data.json');
exports.getallProducts = async (req, res) =>{
    const products = await Product.find();
    res.send(products);
};
exports.addProduct = async (req,res)=>{
    
   try {
    Product.insertMany(data);
        res.send('Success');
}
catch (error){
    res.send(error);
}
}

