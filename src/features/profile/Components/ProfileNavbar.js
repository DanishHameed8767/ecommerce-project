import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllWishlistProducts } from "../../wishlist/wishlistSlice";
import { selectAllCartProducts } from "../../cart/cartSlice";

export default function ProfileNavbar() {
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
                <Link className="nav-link active fs-5" to="/admin/category">
                  Add Category
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/admin/product">
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/admin/sale">
                  Add Sale
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/admin/updatearrival">
                  New Arrival
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
}
