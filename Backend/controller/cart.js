const { Cart } = require('../models/cartModel');
const id ="6516dd04b8f369dccde44140";

exports.showCart = async (req,res) =>{
  const id ="6516dd04b8f369dccde44140";
  try{
    const products = await Cart.find({user:id}).populate("product");
    res.send(products);
  }
  catch(error){
    res.send(error);
  }
};

exports.addToCart = async (req, res) =>{
  const product_id = req.body._id;
  const product_quantity = 1;
  const cart = new Cart({product: product_id,user: id,quantity:product_quantity});
    try{ 
      await cart.save();
        res.status(200).send(await cart.populate("product"));
      }
      catch(error){
        res.status(400);
      }
}

exports.delFromCart = async (req, res) =>{
  const product_id = req.body._id;
    try{ 
     await Cart.findOneAndDelete({_id:product_id});
        res.status(200).send({_id:product_id});
      }
      catch(error){
        res.status(400).send({
          message:"Bad request"
        })
      }
}

exports.updateCart = async (req, res) =>{
  const product_id = req.body._id;
  const update = {...req.body};
    try{ 
     await Cart.findOneAndUpdate({_id:product_id},update,{new:true});
        res.status(200).send({...req.body});
      }
      catch(error){
        res.status(400).send({
          message:"Bad request"
        })
      }
}

exports.clearCart = async (req,res) => {
  try{
    await Cart.deleteMany({user:id});
    res.status(200).json("success");
  }
  catch(err){
    res.status(404).json(err);
  }
}