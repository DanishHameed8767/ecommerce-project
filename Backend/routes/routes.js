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
const {
  showOrders,
  addOrder,
  startStripeSession,
} = require("../controller/order");
var fetchuser = require("../middleware/fetchUser");
const {
  addCategory,
  updateCategory,
  delCategory,
  getallCategories,
} = require("../controller/category");
const Router = express.Router();
const multer = require("multer");

Router.get("/allproducts", getallProducts);
Router.get("/products", getProductsByType);
Router.get("/products/:id", fetchProductById);
Router.post("/category/products", getallProductsByCategory);

Router.post("/addproduct", addProduct);
Router.post("/updatearrival", updateArrival);
Router.get("/wishlist", fetchuser, showWishlist);
Router.post("/wishlist/add", fetchuser, addToWishlist);
Router.delete("/wishlist/del", delFromWishlist);
Router.post("/addmany", addProductMany);

Router.get("/cart", fetchuser, showCart);
Router.post("/cart/add", fetchuser, addToCart);
Router.delete("/cart/del", delFromCart);
Router.patch("/cart/update", updateCart);
Router.post("/cart/clear", fetchuser, clearCart);

Router.get("/order", fetchuser, showOrders);
Router.post("/order/add", fetchuser, addOrder);
Router.post("/order/checkout", startStripeSession);

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

Router.get("/showcategory", getallCategories);
Router.post("/addcategory", addCategory);
Router.patch("/addsubcategory", updateCategory);
Router.delete("/delcategory", delCategory);

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

exports.Router = Router;
