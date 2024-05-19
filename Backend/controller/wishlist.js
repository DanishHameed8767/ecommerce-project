const { Wishlist } = require("../models/wishlistModel");
exports.showWishlist = async (req, res) => {
  userId = req.user.id;
  try {
    const products = await Wishlist.find({ user: userId}).populate("product");
    res.send(products);
  } catch (error) {
    res.send(error);
  }
};

exports.addToWishlist = async (req, res) => {
  userId = req.user.id;
  const product_id = req.body._id;
  const wishlist = new Wishlist({ product: product_id, user: userId });
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
    res.status(400);
  }
};
