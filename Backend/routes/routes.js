const express = require("express");
const {
  getallProducts,
  addProduct,
  getallProductsByCategory,
  updateProducts,
  fetchProductById,
  updateMany,
} = require("../controller/product");
const { body } = require("express-validator");
const path = require("path");
const {
  showWishlist,
  addToWishlist,
  delFromWishlist,
  addToSalesWishlist,
  addToArrivalsWishlist,
} = require("../controller/wishlist");
const {
  addToCart,
  showCart,
  delFromCart,
  updateCart,
  clearCart,
  addToSalesCart,
  addToArrivalsCart,
} = require("../controller/cart");
const {
  createUser,
  allUsers,
  loginUser,
  getUser,
} = require("../controller/user");
const { showOrders, addOrder } = require("../controller/order");
var fetchuser = require("../middleware/fetchUser");
const {
  addCategory,
  updateCategory,
  delCategory,
  getallCategories,
} = require("../controller/category");
const Router = express.Router();
const multer = require("multer");
const { addToSale, getallSales, fetchSalesById } = require("../controller/sale");
const { addArrival, getallArrivals, updateArrival, fetchArrivalsById } = require("../controller/arrival");

Router.get("/allproducts", getallProducts);
Router.get("/products/:id", fetchProductById);
Router.post("/category/products", getallProductsByCategory);

Router.post("/addproduct", addProduct);
Router.get("/wishlist", showWishlist);
Router.post("/wishlist/add", addToWishlist);
Router.post("/wishlist/sales/add", addToSalesWishlist);
Router.post("/wishlist/arrivals/add", addToArrivalsWishlist);
Router.delete("/wishlist/del", delFromWishlist);

Router.get("/cart", showCart);
Router.post("/cart/add", addToCart);
Router.post("/cart/sales/add", addToSalesCart);
Router.post("/cart/arrivals/add", addToArrivalsCart);
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
  console.log(imageName);
  res.json(imageName);
});

Router.post("/updatemany", updateProducts);
Router.post("/updatem", updateMany);

Router.post("/addsale", addToSale);
Router.get("/allsales", getallSales);
Router.get("/sale/products/:id", fetchSalesById);

Router.get("/allarrivals", getallArrivals);
Router.post("/updatearrival", updateArrival);
Router.post("/addarrival", addArrival);
Router.get("/arrivals/:id", fetchArrivalsById);

exports.Router = Router;
