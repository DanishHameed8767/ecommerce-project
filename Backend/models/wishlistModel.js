const mongoose = require("mongoose");
const { Schema } = mongoose;

const wishlistSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    unique: true,
  },
  sale: {
    type: Schema.Types.ObjectId,
    ref: "Sale",
    unique: true,
  },
  arrival: {
    type: Schema.Types.ObjectId,
    ref: "Arrival",
    unique: true,
  },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});
exports.Wishlist = mongoose.model("Wishlist", wishlistSchema);
