import React from "react"
import { Box, Typography, Button, Container } from "@mui/material";
import Machine from "../assets/images/Machine.png"
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate()
    return (
       <Box sx={{backgroundColor: "#f5f9ff", py: 6}  }>  
        <Container>
            <Box 
            sx={{display:"flex",
                alignItems:"center",
                justifyContent: "space-between",
                flexWrap: "wrap"
            }}>

                <Box  sx={{maxWidth: 500}}>

                    <Typography variant="overline" color="primary">
                       🇮🇳  Made in India
                    </Typography>
                    
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        Super Fast, Super Esay Billing Machine
                    </Typography>

                    <Typography variant="body1" color="text.secondary" gutterBottom>
                        Trusted by 50,000+ Restaurants, Clothing Stores, 
                        Kirana Shops & Retail Businesses
                    </Typography>

                   <Box>
                    <Button variant="contained" sx={{mr: 2}}>
                        Buy Now
                    </Button>

                    <Button variant="outlined">
                    Download App
                    </Button>
                </Box>
                
            </Box>

            <Box sx={{
                backgroundColor: "#c7c8f5",
                borderRadius: "24px",
                padding: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",}}>

                <Box component="img" src={Machine} alt="Machine"   
                sx={{
                    width: 380,
                    maxWidth: "100%",
                    transition: "0.3s","&:hover": {transform: "scale(1.06)",},}} />
                    
            </Box>
            </Box>  
        </Container>

    <Box sx={{ py: 10, backgroundColor: "#ffffff" }}>

        <Container>

    <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: "center" }}>
      PRINT PROFESSIONAL BILL IN 2 CLICKS
    </Typography>

    <Typography variant="h3"fontWeight="bold"gutterBottom sx={{ textAlign: "center", mt: 4 }}>
      BILLING MACHINE FOR ALL TYPES OF RETAIL BUSINESSES
    </Typography>

        </Container>
    </Box>

    <Box  sx={{display: "flex",justifyContent: "center",alignItems: "center",}}>

        <Button variant="contained"  onClick={()=> navigate("/Product")}>
            Shop Now 
        </Button>
    </Box>

</Box>         
        )
    }
export default Home



