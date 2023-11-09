const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  total: { type: Number, required: true },
  order_number: { type: Number, required: true },
  status: { type: String, required: true },
});
exports.Order = mongoose.model("Order", orderSchema);
