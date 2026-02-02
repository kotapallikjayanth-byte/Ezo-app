import React,{useState, useEffect} from "react";
import { AppBar, Toolbar, Typography, Box, Button, TextField, Badge} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function Navbar ({ search, setSearch, }) {

const { cartCount } = useContext(CartContext);

const [tempSearch, setTempSearch] = useState(search);

useEffect(() => {
  const handler = setTimeout(() => {
    setSearch(tempSearch);
  }, 1000); 

  return () => {
    clearTimeout(handler); 
  };
}, [tempSearch, setSearch]);


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
          value={tempSearch}
          onChange={(e) => setTempSearch(e.target.value)} 

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

          <Badge badgeContent={cartCount} color="error" invisible={cartCount === 0}  overlap="circular">
            <Button color="inherit" component={Link} to="/Cart" startIcon={<ShoppingCartIcon />}>
             Cart
            </Button>
          </Badge>
         </Box>
      </Toolbar>
    </AppBar>
    )
}
export default Navbar


