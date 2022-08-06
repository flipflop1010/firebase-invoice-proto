import React from 'react'
import { Container, Grid, Button, TextField } from '@mui/material'
const AddCustomer = () => {
    return (
        <div>
            <Container
                sx={{ mt: 5, mb: 3, backgroundColor: "white" }}
                maxWidth="md"
            >
                <Grid container spacing={5}>
                    <Grid item md={12} xs={12} sm={12} >
                        <h2>
                            Add<span style={{ color: "orange" }}>Customer</span>
                        </h2>

                    </Grid>
                </Grid>



                <Grid container spacing={2} sx={{ mt: 3 }}>

                    <Grid item lg={4} md={4} sm={6} xs={12}   >
                        <TextField fullWidth id="customer" label="Customer Name" variant="standard" />
                    </Grid>

                    <Grid item lg={4} md={4} sm={6} xs={12}   >
                        <TextField fullWidth id="address" label="Customer Address" variant="standard" />
                    </Grid>


                    <Grid item lg={4} md={4} sm={6} xs={12}   >
                        <TextField fullWidth id="contact" label="Contact No" variant="standard" />
                    </Grid>
                    <Grid item lg={12} md={12} xs={12} sm={12} sx={{ display: "flex", justifyContent: "right", mt: 1 }} >

                        <Button variant="outlined" sx={{ boxShadow: "none", borderRadius: "0px" }}>Add </Button>
                    </Grid>
                </Grid>



            </Container>
        </div>
    )
}

export default AddCustomer