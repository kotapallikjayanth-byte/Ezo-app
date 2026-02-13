import React, { useContext } from "react";
import { Box, Typography, Button, Container, Card, CardContent, CardMedia, CardActions } from "@mui/material";
import Machine from "../assets/images/Machine.png";
import { useNavigate } from "react-router-dom";
import products from "../data/products";
import { CartContext } from "../context/CartContext";

function Home() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  return (
    <Box sx={{ backgroundColor: "#f5f9ff", py: 6 }}>
      <Container>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
          <Box sx={{ maxWidth: 500 }}>
            <Typography variant="overline" color="primary">
              🇮🇳 Made in India
            </Typography>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Super Fast, Super Easy Billing Machine
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Trusted by 50,000+ Restaurants, Clothing Stores, Kirana Shops & Retail Businesses
            </Typography>
            <Box>
              <Button variant="contained" sx={{ mr: 2 }}>
                Buy Now
              </Button>
              <Button variant="outlined">Download App</Button>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "#c7c8f5",
              borderRadius: "24px",
              padding: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={Machine}
              alt="Machine"
              sx={{
                width: 380,
                maxWidth: "100%",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.06)" },
              }}
            />
          </Box>
        </Box>
      </Container>

   
      <Box sx={{ py: 10, backgroundColor: "#ffffff" }}>
        <Container>
          <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: "center" }}>
            PRINT PROFESSIONAL BILL IN 2 CLICKS
          </Typography>
          <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ textAlign: "center", mt: 4 }}>
            BILLING MACHINE FOR ALL TYPES OF RETAIL BUSINESSES
          </Typography>
        </Container>
      </Box>


      <Box sx={{ py: 6, backgroundColor: "#f5f9ff" }}>
        <Container>
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ textAlign: "center", mb: 4 }}>
            Our Products
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
            {products.map((item) => (
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
                  <Button variant="contained" fullWidth onClick={() => addToCart(item)}>
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 4 }}>
        <Button variant="contained" onClick={() => navigate("/Product")}>
          View All Products
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
