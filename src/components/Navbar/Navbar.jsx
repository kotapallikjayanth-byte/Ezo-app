import React from "react";
import { AppBar, Toolbar, Typography, Box, Button, TextField, linkClasses } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar ({ search, setSearch }) {
    return(
      
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{flexGrow:1}}>
         EZO
        </Typography>

          <Box>
           <TextField 
           
           size="small"
           placeholder="Search products..."
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)} 

          sx={{
          backgroundColor: "white",
          borderRadius: 1,
          minWidth: 200

          }}/>
                 
          </Box>

        <Box>
           <Button color="inherit" component={Link} to="/">
             Home
           </Button>

           <Button color="inherit" component={Link} to="/product">
             Product
           </Button>

           <Button color="inherit" component={Link} to ="ProductDetails">
            ProductsDetails
           </Button>

            <Button color="inherit" component={Link} to="/contact">
             Contact
           </Button>

           <Button color="inherit" component={Link} to="/Cart">
             Cart
           </Button>

         </Box>
      </Toolbar>
    </AppBar>
    )
}
export default Navbar