import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../data/products";
import { Typography, Box, Button } from "@mui/material";

function Product() {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        All PRODUCTS
      </Typography>

      <Box style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((item) => (
          <Box
            key={item.id}
             sx={{
              width: "220px", 
              border: "1px solid #ddd", 
              padding: "10px", 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "space-between", 
              minHeight: "380px"}}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", height: "150px", objectFit: "contain" }}
            />

            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>₹{item.price}</p>

            <Box>
              <Button
                variant="contained"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default Product;
