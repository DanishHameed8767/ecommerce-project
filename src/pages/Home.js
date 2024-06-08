import React from "react";
import Header from "./home-sections/Header";
import Navbar from "../features/Navbar";
import BSellSection from "./home-sections/BSellSection";
import ExpProducts from "./home-sections/ExpProducts";
import NewArrival from "./home-sections/NewArrival";
import Features from "./home-sections/Features";
import Footer from "./home-sections/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <BSellSection />
      <ExpProducts />
      <NewArrival />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
