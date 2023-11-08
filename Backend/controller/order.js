const { Order } = require('../models/orderModel');
const id ="6516dd04b8f369dccde44140";

exports.showOrders = async (req,res) =>{
  const id ="6516dd04b8f369dccde44140";
  try{
    const orders = await Order.find({user:id});
    res.send(orders);
  }
  catch(error){
    res.send(error);
  }
};


exports.addOrder = async (req, res) =>{
    // const arr = req.body;
    const total_price = req.body.total_amount;
    const orderNum = req.body.order_number;
    const order = new Order({total:total_price,user: id,order_number:orderNum,status:"pending"});
    try{ 
              await order.save();
        res.status(200).send(order);
    }
    catch(error){
      res.status(400);
    }

}