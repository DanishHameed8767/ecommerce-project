import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllProducts,
} from "../../features/product/productSlice";
import ProductItem from "../../features/product/components/ProductItem";
import { useNavigate } from "react-router-dom";
import { shuffle } from "../../app/constant";

export default function ExpProducts() {
  const selectProducts = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = shuffle([...selectProducts]);
  return (
    <>
      <div className="container mt-5 card-gap">
        <hr />
      </div>
      <div className="container-fluid">
        <div className="container d-flex justify-content-start px-0 card-gap ms-4 w-50">
          <div className="red-box bg-danger"></div>
          <div className="mt-2 text-danger ms-2">Our Products</div>
        </div>
        <section className="pt-5 pb-5">
          <div className="container-fluid">
              <div className="col-6">
                <div className="mb-3 fs-2 ms-2 fw-bold">
                  Explore Our Products
                </div>
              </div>
            <div className="row">
                <div className="row d-flex justify-content-center">
                  {products
                    .filter((value, index) => index > 10 && index < 19)
                    .map((value, index) => {
                      const RouterChange = () => {
                        navigate("/products/" + value._id + "/");
                      };
                      return (
                        <ProductItem
                          product={value}
                          RouterChange={RouterChange}
                        />
                      );
                    })}
                </div>
              </div>
            
          </div>
        </section>

        <div className="container d-flex justify-content-center">
          <button className="btn btn-danger btn-view-all text-white me-2" onClick={
            ()=>{
              navigate("/products")
            }
          }>
            View All Products
          </button>
        </div>
      </div>
    </>
  );
}
