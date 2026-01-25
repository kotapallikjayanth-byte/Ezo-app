import React from "react";
import { AppBar, Toolbar, Typography, Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar () {
    return(
      
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{flexGrow:1}}>
         EZO
        </Typography>

          <Box>
            <TextField size="small"
            placeholder="Search products..."
            variant="outlined"
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              minWidth: 200
            }}
          />                  
          </Box>

        <Box>
           <Button color="inherit" component={Link} to="/">
             Home
           </Button>
           <Button color="inherit" component={Link} to="/product">
             Product
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