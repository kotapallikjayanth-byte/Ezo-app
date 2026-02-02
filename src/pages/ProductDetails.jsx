import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { Typography, Box, Button,} from "@mui/material";
import { CartContext } from "../context/CartContext";

function ProductDetails(){
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const { addToCart } = useContext(CartContext);
  
  return (
    <>
     {product ? (
  <>
    <Box
      sx={{
        minHeight: "80vh",        
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",     
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 4, 
          p: 3,
          maxWidth: "900px",
          width: "100%",
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {product.name}
        </Typography>

        <Box sx={{ my: 2, textAlign: "center" }}>
          <img 
            src={product.image} 
            alt={product.name}
            style={{ maxWidth: "300px", objectFit: "contain" }}
          />
        </Box>
        
        <Box>
       <Typography variant="h4" fontWeight="bold" gutterBottom>
        {product.name}
        </Typography>

        {product.description.split(".").map((point, index) =>
            point.trim() && (
        <Typography key={index} variant="body1" sx={{ mb: 1 }}>
        • {point.trim()}
        </Typography>
    )
  )}

        <Typography variant="h6" sx={{ mt: 2 }}>
            Price ₹ {product.price}
        </Typography>

        <Button  variant="contained" fullWidth onClick={() => addToCart(product)}>
          Add to cart
        </Button>
        </Box>
      </Box>
    </Box>
  </>
) : (
  <Typography variant="h5" color="error" align="center">
    Product not found
  </Typography>
)}

    </>
  );
}

export default ProductDetails;
