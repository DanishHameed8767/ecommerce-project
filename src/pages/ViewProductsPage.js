import React from "react";
import ProductList from "../features/product/components/ProductList";
import Navbar from "../features/Navbar";

export default function ViewProductsPage() {
  return (
    <>
      <Navbar />
      <ProductList />
    </>
  );
}
