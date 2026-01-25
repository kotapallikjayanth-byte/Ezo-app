import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home";
import Product from "./pages/Product.jsx";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import CartPage from "./pages/Cartpage/Cart.jsx";





function App() {
  return (
   <>
   <BrowserRouter>

   <Navbar/>

   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Product" element={<Product/>}/>
    <Route path="/product/:id" element={<ProductDetails />} />
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/cart" element={<CartPage />} />

   </Routes>

   </BrowserRouter>
</>
   
  );
}

export default App;





