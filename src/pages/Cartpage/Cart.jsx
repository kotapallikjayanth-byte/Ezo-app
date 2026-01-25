import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";


function CartPage() {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>My Cart</h2>
    <p>{cartItems.length === 0 ? "Your cart is empty": "Your cart list"}</p>
      {cartItems.map((item, index) => (
        <div
          key={index}
          style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
        >
          <img src={item.image} width="100" alt={item.name} />
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default CartPage;
