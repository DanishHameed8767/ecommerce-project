const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  category: { type: String, unique: true },
  subCategory: [String],
});
exports.Category = mongoose.model("Category", categorySchema);
