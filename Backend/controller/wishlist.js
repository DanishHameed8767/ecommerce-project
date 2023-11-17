const { Wishlist } = require("../models/wishlistModel");
const id = "6516dd04b8f369dccde44140";
exports.showWishlist = async (req, res) => {
  const id = "6516dd04b8f369dccde44140";
  try {
    const products = await Wishlist.find({ user: id, product: { $exists: true }}).populate("product");
    const saleProducts = await Wishlist.find({ user: id, sale: { $exists: true }}).populate("sale");
    const arrivalProducts = await Wishlist.find({ user: id, arrival: { $exists: true }}).populate("arrival");
    res.send([...products,...saleProducts,...arrivalProducts]);
  } catch (error) {
    res.send(error);
  }
};

exports.addToWishlist = async (req, res) => {
  const product_id = req.body._id;
  const wishlist = new Wishlist({ product: product_id, user: id });
  try {
    await wishlist.save();
    res.status(200).send(await wishlist.populate("product"));
  } catch (error) {
    res.status(400);
  }
};

exports.addToSalesWishlist = async (req, res) => {
  const product_id = req.body._id;
  const wishlist = new Wishlist({ sale: product_id, user: id });
  try {
    await wishlist.save();
    res.status(200).send(await wishlist.populate("sale"));
  } catch (error) {
    res.status(400);
  }
};

exports.addToArrivalsWishlist = async (req, res) => {
  const product_id = req.body._id;
  const cart = new Wishlist({
    arrival: product_id,
    user: id
  });
  try {
    await cart.save();
    res.status(200).send(await cart.populate("arrival"));
  } catch (error) {
    res.status(400);
  }
};

exports.delFromWishlist = async (req, res) => {
  const product_id = req.body._id;
  try {
    await Wishlist.findOneAndDelete({ _id: product_id });
    res.status(200).send({ _id: product_id });
  } catch (error) {
    res.status(400).send({
      message: "Bad request",
    });
  }
};
