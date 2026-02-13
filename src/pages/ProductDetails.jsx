
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import {Typography,Box,Button,Grid,IconButton,Paper} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <Typography variant="h5" color="error" align="center" mt={5}>
        Product not found
      </Typography>
    );
  }

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", p: 4 }}>
      <Grid container spacing={4} alignItems="center">

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", maxHeight: "400px", objectFit: "contain" }}
            />
          </Paper>
        </Grid>

        
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {product.name}
          </Typography>

        
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Typography variant="h5" fontWeight="bold" color="primary">
              ₹ {product.price}
            </Typography>
          </Box>

     
          {/* <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #ccc",
              width: "150px",
              mb: 3
            }}
          >
            <IconButton
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              <Remove />
            </IconButton>

            <Typography sx={{ mx: 2 }}>{quantity}</Typography>

            <IconButton onClick={() => setQuantity(quantity + 1)}>
              <Add />
            </IconButton>
          </Box> */}

          <Button
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            onClick={() => addToCart({ ...product, quantity })}
          >
            Add to Cart
          </Button>

          <Button
            variant="contained"
            fullWidth
            sx={{ bgcolor: "black", "&:hover": { bgcolor: "#333" } }}
          >
            Buy Now
          </Button>

          <Box mt={4}>
            {product.description.split(".").map(
              (point, index) =>
                point.trim() && (
                  <Typography key={index} variant="body1" sx={{ mb: 1 }}>
                    • {point.trim()}
                  </Typography>
                )
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductDetails;