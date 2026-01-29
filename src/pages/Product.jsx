import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../data/products";
import { Typography, Box, Button, Card, CardContent, CardMedia, CardActions,} from "@mui/material";
import { useNavigate } from "react-router-dom";


function Product({search}) {
  const filteredProducts = products.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())
);

const { addToCart } = useContext(CartContext);
const navigate = useNavigate()

  return (
    <>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        All PRODUCTS
      </Typography>

     <Box
  sx={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 3,
    maxWidth: "1200px",
    margin: "0 auto",
    justifyItems: "center",
  }}
>
  {filteredProducts.map((item) => (
    <Card
      key={item.id}
      sx={{
        width: "100%",
        maxWidth: "300px",
        display: "flex",
        flexDirection: "column",
        transition: "0.3s",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image={item.image}
        alt={item.name}
        sx={{ objectFit: "contain", cursor: "pointer", p: 1 }}
        onClick={() => navigate(`/product/${item.id}`)}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {item.name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>

      <Box sx={{ px: 2, pb: 1 }}>
        <Typography variant="subtitle1" fontWeight="bold">
          ₹{item.price}
        </Typography>
      </Box>

      <CardActions sx={{ p: 2 }}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  ))}
</Box>


    </>
  );
}

export default Product;
