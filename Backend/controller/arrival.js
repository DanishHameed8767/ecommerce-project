const { Arrival } = require("../models/arrivalModel");

exports.addArrival = async (req, res) => {
    try {
      const arrival = new Arrival({...req.body, sellCount: 0,type:"side1"});
      await arrival.save();
      res.send('success');
    } catch (error) {
      res.send(error);
    }
  };

  
exports.getallArrivals = async (req, res) => {
    const products = await Arrival.find();
    res.send(products);
  };


  exports.updateArrival = async (req, res) => {
    const product_id = req.body._id;
    const update = { ...req.body };
    try {
      await Arrival.findOneAndUpdate({ _id: product_id }, update, { new: true });
      res.status(200).send({ ...req.body });
    } catch (error) {
      res.status(400).send({
        message: "Bad request",
      });
    }
  };

  
exports.fetchArrivalsById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Arrival.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};