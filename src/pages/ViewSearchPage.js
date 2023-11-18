import React from "react";
import ProductList from "../features/product/components/ProductList";
import Navbar from "../features/Navbar";
import { selectAllProductsList } from "../features/product/productSlice";
import { useSelector } from "react-redux";

export default function ViewSearchPage() {
  const products = useSelector(selectAllProductsList);
  return (
    <>
      <Navbar />
      {products.length === 0 ? (<div className="text-center mt-5">
        <h2>No Search Result</h2>
        <p>We're sorry. We cannot find any matches for your search term.</p>
      </div>):<ProductList />}
    </>
  );
}
