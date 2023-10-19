import React from 'react';
import Header from './Header';
import ProductList from '../features/product/components/ProductList';
import Navbar from '../features/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <ProductList />
    </>
  )
}

export default Home
