const { Category } = require("../models/categoryModel");

exports.getallCategories = async (req, res) => {
  const categories = await Category.find();
  res.send(categories);
};

exports.addCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.send(category);
  } catch (error) {
    res.status(400);
  }
};

exports.updateCategory = async (req, res) => {
  const category = req.body.category;
  const update = { ...req.body };
  try {
    const newCat = await Category.findOneAndUpdate({ category }, update, {
      new: true,
    });
    res.status(200).send(newCat);
  } catch (error) {
    res.status(400).send({
      message: "Bad request",
    });
  }
};

exports.delCategory = async (req, res) => {
  const category = req.body.category;
  try {
    await Category.findOneAndDelete({ category });
    res.status(200).send("success");
  } catch (error) {
    res.status(400).send({
      message: "Bad request",
    });
  }
};
