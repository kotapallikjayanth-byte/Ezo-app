import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  
  const addToCart = (product) => { //add to cart 
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  
  const removeFromcart = (id) => { //remove from cart 
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };


  const increaseQty = (id) => { //increase qty
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  
  const decreaseQty = (id) => { //// decrease qty
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };


let cartCount = 0;  // navbar count
for (let i = 0; i < cartItems.length; i++) {
  cartCount = cartCount + cartItems[i].qty;
}


  return (
    <CartContext.Provider
      value={{cartItems,addToCart,removeFromcart,increaseQty,decreaseQty,cartCount}}>
      {children}
    </CartContext.Provider>
  );
}