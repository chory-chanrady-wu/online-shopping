import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/hero";
import Product from "./pages/products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}

export default App;
