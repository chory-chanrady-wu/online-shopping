import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "../components/hero";

function Product() {
  return (
    <section>
      <div>
        <Hero />
      </div>
      <div>
        <h1 className="text-center font-bold text-2xl">Product</h1>
      </div>
    </section>
  );
}

export default Product;
