const { Order } = require("../models/orderModel");
const { Product } = require("../models/productModel");
const { clearCart } = require("./cart");

const endpointSecret =
  "whsec_32523991099558e81e17ae91557c1e18ddd3f23e928786b03fba5159b544b15d";

exports.showOrders = async (req, res) => {
  userId = req.user.id;
  try {
    const orders = await Order.find({ user: userId });
    res.send(orders);
  } catch (error) {
    res.send(error);
  }
};

const addOrder = async (user, amount, products,address) => {
  const order = new Order({
    total_amount: amount / 100,
    user: user,
    products,
    status: "pending",
    paymentStatus: "received",
    address
  });
  try {
    await order.save();
  } catch (error) {
    return error;
  }
};

const stripe = require("stripe")(
  "sk_test_51PGDu1AtJUUgElgl17dXnD0fryGkFQmS0UxdTGOZndiY45jfyRl9payrNR8yRbZ4zSjDf6nOO00hYkpJWw5eltzO00OYYP2MfY"
);

exports.startStripeSession = async (req, res) => {
  const userId = req.user.id;
  const cart = req.body.products;
  var total;
  const data = await Promise.all(
    cart.map(async (item) => {
      const product = await Product.findById(item.product_id);
      return (
        (Math.round(
          product.price - (product.price * (product.discountPercentage/100))
        )* 100) * item.quantity
      );
    })
  );
  if (data.length === 0) {
    res.json("/cart");
  } else {
    total = data.reduce((sum, amount) => {
      return sum + amount;
    });
  }
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: { user: userId, amount: total, products: JSON.stringify(cart),address:JSON.stringify(req.body.address) },
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

exports.sessionStatus = async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  res.send({
    status: session.status,
    customer_email: session.customer_details.email,
    session: session,
  });
};

exports.listenWebHook = async (request, response) => {
  const sig = request.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }
  // Handle the event
  switch (event.type) {
    case "payment_intent.succeeded":
      const { user, amount } = event.data.object.metadata;
      const products = JSON.parse(event.data.object.metadata.products);
      const address = JSON.parse(event.data.object.metadata.address);
      await addOrder(user, amount, products,address);
      await clearCart(user);

      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.status(200).send(event.data.object);
};
