const express = require('express');
const { getallProducts,addProduct }= require('../controller/product');
const { showWishlist,addToWishlist,delFromWishlist } = require('../controller/wishlist');
const {addToCart,showCart,delFromCart, updateCart} = require('../controller/cart');
const { createUser,allUsers } = require('../controller/user')
const Router = express.Router();
Router.get('/allproducts',getallProducts);

Router.post('/addproduct',addProduct);
Router.get('/wishlist',showWishlist);
Router.post('/wishlist/add',addToWishlist);
Router.delete('/wishlist/del',delFromWishlist);

Router.get('/cart',showCart);
Router.post('/cart/add',addToCart);
Router.delete('/cart/del',delFromCart);
Router.patch('/cart/update',updateCart);

Router.get('/signup/allusers',allUsers)
Router.post('/signup/createuser',createUser)
exports.Router = Router;