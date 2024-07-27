const { User } = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

exports.allUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.send(error);
  }
};

// ROUTE 1: Create a User using: POST "/createuser". No login required
exports.createUser = async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ name:"validationError",message: `${errors.errors[0].msg}` });
  }
  try {
    // Check whether the user with this email exists already
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        success,
        name:"email exists",
        message: "Sorry a user with this email already exists",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
    });
    const data = {
      user: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(data, process.env.JWT_SECRET);

    success = true;
    res.json({ success, authToken, user });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({name:"internalError",message:"Some error occured."});
  }
};

// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
exports.loginUser = async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ name:"validationError",message: "Please enter valid credentials." });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false;
      return res
        .status(400)
        .json({
          name: "unauthorized",
          message: "Please try to login with correct credentials"
        });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false;
      return res.status(400).json({
        success,
        name: "unauthorized",
        message: "Please try to login with correct credentials"
      });
    }

    const data = {
      user: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(data, process.env.JWT_SECRET);
    success = true;
    res.json({ success, authToken, user });
  } catch (error) {
    res.status(500).send({ name: "Internal Server Error",message:"Some error occured." });
  }
};

// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
exports.getUser = async (req, res) => {
  let success = false;
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    success = true;
    res.send({ ...user,success });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
