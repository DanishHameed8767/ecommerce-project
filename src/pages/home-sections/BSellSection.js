import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllProducts,
} from "../../features/product/productSlice";
import ProductItem from "../../features/product/components/ProductItem";
import { useNavigate } from "react-router-dom";
export default function BSellSection() {
  const selectProducts = useSelector(selectAllProducts);
  const navigate = useNavigate();
  const products = [...selectProducts].sort(function(a, b){
    return b.sellCount - a.sellCount;
    });
  return (
    <>
      <div className="container-fluid">
        <div className="container d-flex justify-content-start px-0 card-gap ms-4 w-50">
          <div className="red-box bg-danger"></div>
          <div className="mt-2 text-danger ms-2">This Month</div>
        </div>
          <div className="container-fluid py-5">
            <div className="row">
              <div className="col-md-8 col-sm-4">
                <div className="mb-3 fs-2 ms-2 fw-bold">
                  Best Selling Products
                </div>
              </div>
              <div className="col-md-4 col-sm-2 text-right d-flex justify-content-center">
                <button className="btn btn-danger btn-view-all text-white me-2" onClick={
                  () =>{
                    navigate("/products/view")
                  }
                }>
                  View All Products
                </button>
              </div></div>
                      <div className="row mx-2">
                        {products
                          .filter((val, index) => index < 4)
                          .map((value, index) => {
                            const RouterChange = () => {
                              navigate("/products/" + value._id);
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
    </>
  );
}
