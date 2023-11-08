const express = require("express");
const { getallProducts, addProduct } = require("../controller/product");
const { body } = require("express-validator");
const {
  showWishlist,
  addToWishlist,
  delFromWishlist,
} = require("../controller/wishlist");
const {
  addToCart,
  showCart,
  delFromCart,
  updateCart,
  clearCart,
} = require("../controller/cart");
const {
  createUser,
  allUsers,
  loginUser,
  getUser,
} = require("../controller/user");
const { showOrders, addOrder } = require("../controller/order");
var fetchuser = require("../middleware/fetchUser");
const { addCategory, updateCategory, delCategory, getallCategories } = require("../controller/category");
const Router = express.Router();
Router.get("/allproducts", getallProducts);

Router.post("/addproduct", addProduct);
Router.get("/wishlist", showWishlist);
Router.post("/wishlist/add", addToWishlist);
Router.delete("/wishlist/del", delFromWishlist);

Router.get("/cart", showCart);
Router.post("/cart/add", addToCart);
Router.delete("/cart/del", delFromCart);
Router.patch("/cart/update", updateCart);
Router.delete("/cart/clear", clearCart);

Router.get("/order", showOrders);
Router.post("/order/add", addOrder);

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
Router.post("/getuser", fetchuser, getUser);

Router.get("/showcategory", getallCategories);
Router.post("/addcategory", addCategory);
Router.patch("/addsubcategory", updateCategory);
Router.delete("/delcategory", delCategory);

exports.Router = Router;
