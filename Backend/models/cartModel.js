const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
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
  quantity: Number,
});
exports.Cart = mongoose.model("Cart", cartSchema);
