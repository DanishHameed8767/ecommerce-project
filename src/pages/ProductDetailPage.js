import React from "react";
import Navbar from "../features/Navbar";
import ProductDetail from "../features/product/components/ProductDetail";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductByIdAsync,
  selectProductDetails,
} from "../features/product/productSlice";

export default function ProductDetailPage() {
  const dispatch = useDispatch();
  const pd = useSelector(selectProductDetails);
  const params = useParams();
  useEffect(() => {
    dispatch(fetchProductByIdAsync(params.id));
    // console.log("useEffect() called");
  }, []);
  return (
    <>
      <Navbar />
      {pd && <ProductDetail />}
    </>
  );
}
