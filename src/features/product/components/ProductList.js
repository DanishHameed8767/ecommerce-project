import React from "react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
import {
  selectAllProductsList,
} from "../productSlice";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  const navigate = useNavigate();
  const selectProducts = useSelector(selectAllProductsList);
  var products = selectProducts.filter((product) =>product.stock !== 0);
   products = [...products].sort(function(a, b){
    return b.sellCount - a.sellCount;
    });
  return (
    <>
      <div className="mt-4  d-flex flex-row">
        <div className="row container-fluid">

          {products.map((value) => {
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
    </>
  );
}
