import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetail,
  selectAllProducts,
} from "../../features/product/productSlice";
import ProductItem from "../../features/product/components/ProductItem";
import { addToWishlistAsync } from "../../features/wishlist/wishlistSlice";
import { useNavigate } from "react-router-dom";
export default function ExpProducts() {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className="container mt-5 card-gap">
        <hr />
      </div>
      <div className="container-fluid">
        <div className="container d-flex justify-content-start px-0 card-gap ms-4">
          <div className="red-box bg-danger"></div>
          <div className="mt-2 text-danger ms-2">Our Products</div>
        </div>
        <section className="pt-5 pb-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-8">
                <div className="mb-3 fs-2 ms-2 fw-bold">
                  Explore Our Products
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  {products
                    .filter((value, index) => index > 10 && index < 19)
                    .map((value, index) => {
                      const handleClick = (e) => {
                        e.preventDefault();
                        e.target.style.color = "red";
                        dispatch(addToWishlistAsync(value));
                      };
                      const RouterChange = () => {
                        navigate("/products/details/" + value._id + "/");
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
        </section>

        <div className="container d-flex justify-content-center">
          <button className="btn btn-danger btn-view-all me-2">
            View All Products
          </button>
        </div>
      </div>
    </>
  );
}
