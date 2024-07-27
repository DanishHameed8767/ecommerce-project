const { Cart } = require("../models/cartModel");

exports.showCart = async (req, res) => {
  try {
    userId = req.user.id;
    const products = await Cart.find({
      user: userId,
      product: { $exists: true },
    }).populate("product");
    res.send(products);
  } catch (error) {
    res.status(400).json({
      error: {
        message: error.message,
      },
    });
  }
};

exports.addToCart = async (req, res) => {
  userId = req.user.id;
  const productId = req.body._id;
  const productQuantity = 1;
  const cart = new Cart({
    product: productId,
    user: userId,
    quantity: productQuantity,
  });
  try {
    await cart.save();
    res.status(200).send(await cart.populate("product"));
  } catch (error) {
    res.status(400).json({
      error: {
        message: error.message,
      },
    });
  }
};

exports.delFromCart = async (req, res) => {
  const cartId = req.body._id;
  try {
    await Cart.findOneAndDelete({ _id: cartId });
    res.status(200).send({ _id: cartId });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

exports.updateCart = async (req, res) => {
  const productId = req.body._id;
  const update = { ...req.body };
  try {
    await Cart.findOneAndUpdate({ _id: productId }, update, { new: true });
    res.status(200).send({ ...req.body });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

exports.clearCart = async (user) => {
  try {
    await Cart.deleteMany({ user });
  } catch (err) {
    return err;
  }
};

exports.mergeCarts = async (req, res) => {
  const userId = req.user.id;
  const localStorageCart = req.body;
  const data = localStorageCart.map((element) => {
    return { product: element.product._id, quantity: element.quantity, user: userId };
  });
  try {
    const cart = await Cart.insertMany(data);
    // const da 
    res.status(201).send(await Cart.find({user:userId}).populate("product"));
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};
