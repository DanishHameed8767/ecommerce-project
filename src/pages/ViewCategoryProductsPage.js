import React, { useEffect } from "react";
import ProductList from "../features/product/components/ProductList";
import Navbar from "../features/Navbar";
import { useParams } from "react-router-dom";
import { fetchAllProductsByCategoryAsync } from "../features/product/productSlice";
import { useDispatch } from "react-redux";

export default function ViewCategoryProductsPage() {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAllProductsByCategoryAsync({ category: params.id }))
  },[dispatch])
  return (
    <>
      <Navbar />
      <ProductList />
    </>
  );
}
