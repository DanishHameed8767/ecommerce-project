const { Wishlist } = require("../models/wishlistModel");
const id = "6516dd04b8f369dccde44140";
exports.showWishlist = async (req, res) => {
  const id = "6516dd04b8f369dccde44140";
  try {
    const products = await Wishlist.find({ user: id }).populate("product");
    res.send(products);
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
