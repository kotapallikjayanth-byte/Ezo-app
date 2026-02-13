import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function CartPage() {

  const {
    cartItems,
    removeFromcart,
    increaseQty,
    decreaseQty
  } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <Box p={3}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        My Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="h6" color="text.secondary">
          Your cart is empty
        </Typography>
      ) : (
        <>
          {cartItems.map((item) => (
            <Card key={item.id} sx={{ display: "flex", mb: 2 }}>
              <CardMedia
                component="img"
                sx={{ width: 120 }}
                image={item.image}
                alt={item.name}
              />

              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">
                  {item.name}
                </Typography>

                <Typography>
                  ₹{item.price}
                </Typography>

                <Box mt={1}>
                  <Button onClick={() => decreaseQty(item.id)}>-</Button>
                  {item.qty}
                  <Button onClick={() => increaseQty(item.id)}>+</Button>
                </Box>

                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon />}
                  sx={{ mt: 1 }}
                  onClick={() => removeFromcart(item.id)}
                >
                  Delete
                </Button>
              </CardContent>

              <Box p={2} display="flex" alignItems="center">
                <Typography fontWeight="bold">
                  ₹{item.price * item.qty}
                </Typography>
              </Box>
            </Card>
          ))}

         
          <Box mt={3} textAlign="right">
            <Typography variant="h5" fontWeight="bold">
              Total: ₹{total}
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
}

export default CartPage;