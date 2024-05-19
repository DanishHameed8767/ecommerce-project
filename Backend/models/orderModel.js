const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  total_amount: { type: Number, required: true },
  products: [ {product_id:{ type: Schema.Types.ObjectId, ref: "Product", required: true },quantity:Number} ],
  status: { type: String, default:"pending" },
});
exports.Order = mongoose.model("Order", orderSchema);
