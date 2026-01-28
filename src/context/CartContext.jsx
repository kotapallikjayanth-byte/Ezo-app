import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const removeFromcart = (idRemove)=>{
    setCartItems((prev)=>
    prev.filter((item)=>item.id!==idRemove))
  }

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromcart}}>
      {children}
    </CartContext.Provider>
  );
}

