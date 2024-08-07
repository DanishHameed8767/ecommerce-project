const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  total_amount: { type: Number, required: true },
  products: [
    {
      product_id: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: Number,
    },
  ],
  address: {
    detail: String,
    country: String,
    state: String,
    zip: String,
  },
  status: { type: String, default: "pending" },
  paymentStatus: { type: String, default: "pending" },
  orderDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});
exports.Order = mongoose.model("Order", orderSchema);
