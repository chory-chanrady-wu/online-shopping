import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/hero";
import Product from "./pages/products";
import Home from "./pages/home";
import Trending from "./pages/trending";
import Support from "./pages/support";
import Company from "./pages/company";
// import Login from "./pages/login";
// import Signup from "./pages/signup";

function App() {
  return (
    <Routes>
      <Route path="/src/components/hero" element={<Hero />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/support" element={<Support />} />
      <Route path="/company" element={<Company />} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/signup" element={<Signup />} /> */}
    </Routes>
  );
}

export default App;
