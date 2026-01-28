import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {  Box,Typography,Card, CardContent, CardMedia,Button,Divider} from "@mui/material";


function CartPage() {
const { cartItems, removeFromcart} = useContext(CartContext);

const total = cartItems.reduce((sum ,item)=>sum + item.price,0)
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
        <Typography variant="subtitle1" mb={2}>
          Your cart items
        </Typography>

        {cartItems.map((item, index) => (
          <Card key={index} sx={{ display: "flex", mb: 2,}}>
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

              <Typography variant="body1" color="text.secondary">
                ₹{item.price}
              </Typography>

              <Button variant="outlined" color="error" sx={{ mt: 1 }} onClick={()=> removeFromcart (item.id)}>
                Remove
              </Button>
            </CardContent>
          </Card> 
        ))}
        <Typography variant="h5" mt={3} fontWeight="bold">
          Total :₹{total}
        </Typography>
      </>
    )}
  </Box>
);

}

export default CartPage;
