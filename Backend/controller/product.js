const { Product } = require('../models/productModel');

exports.getallProducts = async (req, res) =>{
    const products = await Product.find();
    res.send(products);
};
exports.addProduct = async (req,res)=>{
    
   try {
    Product.insertMany(req.body);
        res.send('Success');
}
catch (error){
    res.send(error);
}
}

