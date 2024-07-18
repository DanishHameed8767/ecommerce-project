import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllCartProducts } from "../../cart/cartSlice";

export default function ProfileNavbar() {
  const cartProducts = useSelector(selectAllCartProducts);
  const handleLogOut = () => {
    localStorage.removeItem("token");
  };
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark sticky-top border-bottom p-4">
        <div className="container-fluid">
          <Link className="navbar-brand fs-3" to="/">
          Urban Cart
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
                <Link className="nav-link active fs-5" to="/admin/product">
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/admin/updatearrival">
                  New Arrival
                </Link>
              </li>
            </ul>
            <Link to="/cart" className="link-dark">
              <i role="button" className="fa-solid fa-cart-shopping fa-xl"></i>
              <span className="badge bg-danger" id="lblCartCount">
                {cartProducts.length}
              </span>
            </Link>
            <Link
                  className="text-decoration-none active fs-5 text-white"
                  to="/login"
                >
                  <i role="button" onClick={handleLogOut} className="fa-solid fa-right-from-bracket fa-lg"></i>
                </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
