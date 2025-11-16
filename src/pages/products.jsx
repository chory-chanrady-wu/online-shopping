import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "../components/hero";
import Footer from "../components/footer";

function Product() {
  return (
    <section>
      <div>
        <Hero />
      </div>
      <div className="bg-gray-800 flex items-center justify-center">
        <h1 className="text-center font-bold text-2xl">Product</h1>
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
}

export default Product;
