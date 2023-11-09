import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetail,
  selectAllProducts,
} from "../../features/product/productSlice";
import { addToWishlistAsync } from "../../features/wishlist/wishlistSlice";
import { useNavigate } from "react-router-dom";
import ProductItem from "../../features/product/components/ProductItem";

export default function CardSlider() {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className="container d-flex justify-content-start px-0 card-gap ms-4">
        <div className="red-box bg-danger"></div>
        <div className="mt-2 text-danger ms-2">Today's</div>
      </div>
      <section className="py-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-9">
              <div className="mb-3 ms-2 fs-2 fw-bold">Flash Sales </div>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <button
                className="btn btn-danger mb-3 mr-1"
                data-bs-target="#carouselExampleIndicators2"
                data-bs-slide="prev"
              >
                <i className="fa fa-arrow-left" />
              </button>
              <button
                className="btn btn-danger mb-3 ms-2 me-5"
                data-bs-target="#carouselExampleIndicators2"
                data-bs-slide="next"
              >
                <i className="fa fa-arrow-right" />
              </button>
            </div>
            <div className="col-12">
              <div
                id="carouselExampleIndicators2"
                className="carousel slide"
                // data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      {products
                        .filter((value, index) => index >99)
                        .map((value, index) => {
                          
                          const handleClick = (e) => {
                            e.preventDefault();
                            e.target.style.color = "red";
                            console.log(value);
                            dispatch(addToWishlistAsync(value));
                          };
                          const RouterChange = () => {
                            dispatch(getProductDetail(value));
                            navigate("/products/details");
                            console.log(value);
                          };
                          return (
                            <ProductItem
                              item={value}
                              handleClick={handleClick}
                              RouterChange={RouterChange}
                            />
                          );
                        })}
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      {products
                        .filter((value, index) => index > 3 && index < 8)
                        .map((value, index) => {
                          
                          const handleClick = (e) => {
                            e.preventDefault();
                            e.target.style.color = "red";
                            console.log(value);
                            dispatch(addToWishlistAsync(value));
                          };
                          const RouterChange = () => {
                            dispatch(getProductDetail(value));
                            navigate("/products/details");
                            console.log(value);
                          };
                          return (
                            <ProductItem
                              item={value}
                              handleClick={handleClick}
                              RouterChange={RouterChange}
                            />
                          );
                        })}
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      {products
                        .filter((value, index) => index > 7 && index < 12)
                        .map((value, index) => {
                          
                          const handleClick = (e) => {
                            e.preventDefault();
                            e.target.style.color = "red";
                            console.log(value);
                            dispatch(addToWishlistAsync(value));
                          };
                          const RouterChange = () => {
                            dispatch(getProductDetail(value));
                            navigate("/products/details");
                            console.log(value);
                          };
                          return (
                            <ProductItem
                              item={value}
                              handleClick={handleClick}
                              RouterChange={RouterChange}
                            />
                          );
                        })}
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      {products
                        .filter((value, index) => index > 11 && index < 16)
                        .map((value, index) => {
                          
                          const handleClick = (e) => {
                            e.preventDefault();
                            e.target.style.color = "red";
                            console.log(value);
                            dispatch(addToWishlistAsync(value));
                          };
                          const RouterChange = () => {
                            dispatch(getProductDetail(value));
                            navigate("/products/details");
                            console.log(value);
                          };
                          return (
                            <ProductItem
                              item={value}
                              handleClick={handleClick}
                              RouterChange={RouterChange}
                            />
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container d-flex justify-content-center">
        <button className="btn btn-danger btn-view-all">
          View All Products
        </button>
      </div>
    </>
  );
}
