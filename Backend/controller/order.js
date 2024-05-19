const { Order } = require("../models/orderModel");
const { Product } = require("../models/productModel");

exports.showOrders = async (req, res) => {
  userId = req.user.id;
  try {
    const orders = await Order.find({ user: userId });
    res.send(orders);
  } catch (error) {
    res.send(error);
  }
};

exports.addOrder = async (req, res) => {
  userId = req.user.id;
  const total_price = req.body.total_amount;
  const orderNum = req.body.order_number;
  const order = new Order({
    total: total_price,
    user: userId,
    order_number: orderNum,
    status: "pending",
  });
  try {
    await order.save();
    res.status(200).send(order);
  } catch (error) {
    res.status(400);
  }
};

const stripe = require("stripe")(
  "sk_test_51PGDu1AtJUUgElgl17dXnD0fryGkFQmS0UxdTGOZndiY45jfyRl9payrNR8yRbZ4zSjDf6nOO00hYkpJWw5eltzO00OYYP2MfY"
);

exports.startStripeSession = async (req, res) => {
  const cart = req.body.products;
  const data = await Promise.all(
    cart.map(async (item) => {
      const product = await Product.findById(item.product_id);
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.title,
          },
          unit_amount:
            product.price * 100 -
            product.price * 100 * product.discountPercentage,
        },
        quantity: item.quantity,
      };
    })
  );
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: data,
      success_url: `http://localhost:3000/order/placed`,
      cancel_url: `http://localhost:3000/order/error`,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
