import React from "react";
import Navbar from "../features/Navbar";
import { selectAllProducts } from "../features/product/productSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductItem from "../features/product/components/ProductItem";

export default function ViewAllProductsPage() {
 const products = useSelector(selectAllProducts);
 const navigate = useNavigate();
  return (
    <>
      <Navbar />
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
