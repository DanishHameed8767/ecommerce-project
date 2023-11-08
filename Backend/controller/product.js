const { Product } = require('../models/productModel');

exports.getallProducts = async (req, res) =>{
    const products = await Product.find();
    res.send(products);
};
exports.addProduct = async (req,res)=>{
    
   try {
    const product = new Product(req.body);
    await product.save();
        res.send(product);
}
catch (error){
    res.send(error);
}
}

