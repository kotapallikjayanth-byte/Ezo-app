import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../data/products";
import { Typography, Box, Button } from "@mui/material";

function Product({search}) {
  const filteredProducts = products.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())
);

const { addToCart } = useContext(CartContext);

  return (
    <>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        All PRODUCTS
      </Typography>

      <Box style={{  display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",  
          gap: "20px" ,
          justifyItem:"center"}}>

        {filteredProducts.map((item) => (
          <Box
            key={item.id}
             sx={{
              
              border: "1px solid #ddd", 
              padding: "10px", 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "space-between", 
              minHeight: "380px",
            transition: "0.3s","&:hover": {transform: "scale(1.06)",}}}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", height: "150px", objectFit: "contain", margin:"0 auto", display:"block"}}
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
