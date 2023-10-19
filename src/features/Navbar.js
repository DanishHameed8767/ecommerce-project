import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllCartProducts } from "./cart/cartSlice";
import { selectAllWishlistProducts } from "./wishlist/wishlistSlice";

const Navbar = () => {
  const wishProducts = useSelector(selectAllWishlistProducts);
  const cartProducts = useSelector(selectAllCartProducts);
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-white sticky-top border-bottom p-4">
        <div className="container-fluid">
          <Link className="navbar-brand fs-3" to="/">
            E-Commerce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/signup">
                  Sign Up
                </Link>
              </li>
            </ul>
            <Link to="/wishlist" className="link-dark">
              <i role="button" className="fa-regular fa-heart fa-xl"></i>
            <span className="badge bg-danger" id="lblWishCount">
              {wishProducts.length}
            </span>
            </Link>
            <Link to="/cart" className="link-dark">
              <i role="button" className="fa-solid fa-cart-shopping fa-xl"></i>
            <span className="badge bg-danger" id="lblCartCount">
              {cartProducts.length}
            </span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
