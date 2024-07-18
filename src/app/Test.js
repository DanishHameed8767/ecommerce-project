import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectAllCartProducts } from "../features/cart/cartSlice";
import {
  fetchAllProductsByCategoryAsync,
  searchProductsAsync,
  selectAllProducts,
} from "../features/product/productSlice";
import { capitalizeAllWords, shuffle } from "./constant";

const Dashboard = () => {
  const cartProducts = useSelector(selectAllCartProducts);
  const selectProducts = useSelector(selectAllProducts);
  const rawCategory = [
    ...new Set(selectProducts.map((product) => product.category)),
  ];
  const categories = shuffle([...rawCategory]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchProductsAsync(keyword));
    navigate("/search/results");
  };
  const handleLogOut = () => {
    localStorage.removeItem("token");
  };
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark sticky-top py-4">
        <div className="container-fluid px-4 d-flex justify-content-between align-items-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
            <Link className="navbar-brand fs-3" to="/">
              Urban <span className=" text-danger">Cart</span>
            </Link>
          <div className="d-flex order-md-3 order-sm-3 align-items-center">
              <Link to="/cart" className="link-dark">
                <i
                  role="button"
                  className="fa-solid fa-cart-shopping fa-xl"
                ></i>
                <span className="badge bg-danger" id="lblCartCount">
                  {cartProducts.length}
                </span>
              </Link>
              {localStorage.getItem("token") ? (
                <Link
                  className="text-decoration-none active fs-5 text-white"
                  to="/login"
                >
                  <i role="button" onClick={handleLogOut} className="fa-solid fa-right-from-bracket fa-lg"></i>
                </Link>
              ) : (
                <Link
                  className="text-decoration-none active fs-5 text-white"
                  to="/login"
                >
                <i className="fa-solid fa-lg fa-user"></i>
                </Link>
              )}
            
          </div>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav  d-flex justify-content-around container">
              {categories
                .filter((x, i) => i < 9)
                .map((value) => {
                  const capWords = capitalizeAllWords(value);
                  const handleClick = () => {
                    dispatch(
                      fetchAllProductsByCategoryAsync({ category: value })
                    );
                    navigate("/products/view");
                  };
                  return (
                    <li
                      role="button"
                      onClick={handleClick}
                      className="nav-item text-white d-md-none d-sm-none py-2"
                    >
                      {capWords}
                    </li>
                  );
                })}
              <li className="nav-item">
                <form
                  className="d-flex me-5"
                  role="search"
                  onSubmit={handleSubmit}
                >
                  <input
                    className="form-control rounded-1"
                    value={keyword}
                    onChange={(e) => onChange(e)}
                    type="search"
                    placeholder="What are you looking for?"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-danger search-btn text-white border-0 m-0 rounded-1"
                    type="submit"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Dashboard;
