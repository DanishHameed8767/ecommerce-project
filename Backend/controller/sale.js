const { Sale } = require("../models/saleModel");
const { Product } = require("../models/productModel");

exports.addToSale = async (req, res) => {
    const sale = new Sale(req.body);
    try {
      await sale.save();
      res.status(200).send(sale);
    } catch (error) {
      res.status(400);
    }
  };

exports.getallSales = async (req, res) => {
    const sales = await Sale.find();
    res.send(sales);
  };

  exports.fetchSalesById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const product = await Sale.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(400).json(err);
    }
  };