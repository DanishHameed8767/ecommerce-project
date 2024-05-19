import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectAllCartProducts } from "./cart/cartSlice";
import { selectAllWishlistProducts } from "./wishlist/wishlistSlice";
import { searchProductsAsync } from "./product/productSlice";

const Navbar = () => {
  const wishProducts = useSelector(selectAllWishlistProducts);
  const cartProducts = useSelector(selectAllCartProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [keyword,setKeyword]  = useState('');
  const onChange = (e) => {
    setKeyword(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchProductsAsync(keyword));
    navigate('/search/results');
  }
  const handleLogOut = () => {
    localStorage.removeItem("token");
  }
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark sticky-top p-4">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav  d-flex justify-content-around container">
              <li className="nav-item">     
          <Link className="navbar-brand fs-3" to="/">
            Urban <span className=" text-danger">Cart</span>
          </Link>
              </li>
                <li className="nav-item"><form className="d-flex me-5" role="search" onSubmit={handleSubmit}>
                  <input
                    className="form-control rounded-1"
                    value={keyword}
                    onChange={(e)=>onChange(e)}
                    type="search"
                    placeholder="What are you looking for?"
                    aria-label="Search"
                  />
                  <button className="btn btn-danger search-btn text-white border-0 m-0 rounded-1" type="submit">
                    <i className="fa fa-search"></i>
                    
                  </button>
                </form></li>
                <li className="nav-item">
                  <div>
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
            {localStorage.getItem("token")? <Link className="text-decoration-none active fs-5 text-white" to="/login">
                  <span onClick={handleLogOut}>Log Out</span>
                </Link> : <Link className="text-decoration-none active fs-5 text-white" to="/login">
                  <span>Log In</span>
                </Link>}
                </div></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
