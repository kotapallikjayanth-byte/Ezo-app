import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const cartCount = cartItems.reduce((total, item) => {
  return total + (item.qty || 1);
}, 0);


  const removeFromcart = (idRemove)=>{
    setCartItems((prev)=>
    prev.filter((item)=>item.id!==idRemove))
  }

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };
 
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromcart, cartCount}}>
      {children}
    </CartContext.Provider>
  );
}

