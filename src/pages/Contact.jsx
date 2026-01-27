import React from "react"

import {Box, TextField,Button, Typography, Paper} from "@mui/material";

function Contact() {
    return (
        <>
        <Box sx={{ minHeight:"80vh",
            display:"flex",
            alignItems:"center",
            justifyContent:"center" 
            }}
            >
                <Paper sx={{p:4, width:400}}>

                    <Typography variant="h5" align="center" fontWeight="bold">
                        EZO BOOKS
                    </Typography>

                    <Typography variant="h5" mt={2}>
                        Sign in
                    </Typography>
                    
                    <Typography variant="body2" color="text. secondary" mb={2}>
                        Sign in or create an account
                    </Typography>

                    <Button
                    fullWidth
                    variant="contained"
                    sx={{mb:2}}>
                        Sign in With Shop
                    </Button>

                    <Typography align="center" variant="body2" mb={2}>
                        or
                    </Typography>

                    <TextField
                    fullWidth
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        />   

                        <Button fullWidth
                        variant="outlined"
                        sx={2}>
                            Continue
                        </Button>
                    

                </Paper>
            
        </Box>
        </>
    )
}

export default Contact 