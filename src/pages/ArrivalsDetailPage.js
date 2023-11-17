import React from "react";
import Navbar from "../features/Navbar";
import ProductDetail from "../features/product/components/ProductDetail";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchArrivalsByIdAsync,
  selectProductDetails,
} from "../features/product/productSlice";

export default function ArrivalsDetailPage() {
  const dispatch = useDispatch();
  const pd = useSelector(selectProductDetails);
  const params = useParams();
  useEffect(() => {
    dispatch(fetchArrivalsByIdAsync(params.id));
  }, []);
  return (
    <>
      <Navbar />
      {pd && <ProductDetail />}
    </>
  );
}
