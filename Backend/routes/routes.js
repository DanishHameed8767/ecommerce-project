const express = require("express");
const {
  getallProducts,
  addProduct,
  getallProductsByCategory,
  updateProducts,
  fetchProductById,
  updateMany,
  searchProducts,
  getProductsByType,
  updateArrival,
  addProductMany,
} = require("../controller/product");
const { body } = require("express-validator");
const path = require("path");
const {
  addToCart,
  showCart,
  delFromCart,
  updateCart,
  mergeCarts,
} = require("../controller/cart");
const {
  createUser,
  allUsers,
  loginUser,
  getUser,
} = require("../controller/user");
const {
  showOrders,
  startStripeSession,
  sessionStatus,
} = require("../controller/order");
var fetchuser = require("../middleware/fetchUser");
const Router = express.Router();
const multer = require("multer");

Router.get("/allproducts", getallProducts);
Router.get("/products", getProductsByType);
Router.get("/products/:id", fetchProductById);
Router.post("/category/products", getallProductsByCategory);

Router.post("/addproduct", addProduct);
Router.post("/updatearrival", updateArrival);
Router.post("/addmany", addProductMany);

Router.get("/cart", fetchuser, showCart);
Router.post("/cart/add", fetchuser, addToCart);
Router.delete("/cart/del", fetchuser, delFromCart);
Router.patch("/cart/update", fetchuser, updateCart);
Router.post("/cart/merge",fetchuser, mergeCarts);

Router.get("/order", fetchuser, showOrders);
Router.post("/order/checkout", fetchuser, startStripeSession);

Router.get("/signup/allusers", allUsers);
Router.post(
  "/signup/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  createUser
);
Router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  loginUser
);
Router.get("/getuser", fetchuser, getUser);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Backend/public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });
Router.post("/uploadimage", upload.single("image"), function (req, res, next) {
  const imageName = req.file.filename;
  res.json(imageName);
});

Router.post("/updatemany", updateProducts);
Router.post("/updatem", updateMany);

Router.get("/search", searchProducts);

Router.get("/session-status", sessionStatus);

const util = require("util");
const bodyParser = require("body-parser");

exports.Router = Router;
