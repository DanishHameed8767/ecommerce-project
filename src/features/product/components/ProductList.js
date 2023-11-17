import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProductsAsync,
  getProductDetail,
  selectAllProducts,
  selectAllProductsList,
} from "../productSlice";
import { useNavigate } from "react-router-dom";
import { addToWishlistAsync } from "../../wishlist/wishlistSlice";

export default function ProductList() {
  const navigate = useNavigate();
  const selectProducts = useSelector(selectAllProductsList);
  var products = selectProducts.filter((product) =>product.stock != 0);
   products = [...products].sort(function(a, b){
    return b.sellCount - a.sellCount;
    });
  const dispatch = useDispatch();
  return (
    <>
      <div className="mt-4  d-flex flex-row">
        <div className="row container-fluid">

          {products.map((value) => {
            const handleClick = (e) => {
              e.preventDefault();
              e.target.style.color = "red";
              console.log(value);
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
    </>
  );
}
