import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { Typography, Box,} from "@mui/material";

function ProductDetails(){
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
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
          p: 3,
          maxWidth: "600px",
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
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </Box>

        <Typography variant="body1" sx={{ mb: 1 }}>
          {product.description}
        </Typography>

        <Typography variant="h6">
            ₹ {product.price}
        </Typography>
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
