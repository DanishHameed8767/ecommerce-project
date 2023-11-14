import React from "react";
import Navbar from "../features/Navbar";
import ProductDetail from "../features/product/components/ProductDetail";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllSalesAsync,
  fetchSalesByIdAsync,
  selectProductDetails,
} from "../features/product/productSlice";

export default function SalesDetailPage() {
  const dispatch = useDispatch();
  const pd = useSelector(selectProductDetails);
  const params = useParams();
  useEffect(() => {
    dispatch(fetchSalesByIdAsync(params.id));
  }, []);
  return (
    <>
      <Navbar />
      {pd && <ProductDetail />}
    </>
  );
}
