
///////////////////////////////////////////////////////////////////////////////////////////////
//  Invoice  portion (tsx) >
//  Created 220705_DS-->
// <!-------------------------------------------->
//  This  is used in Invoice Page 
////////////////////////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from "react";
import {
    Grid,
    Box,
    Button,
    Typography,
    Container,
    CardContent,

    Card,
    Autocomplete,
    TextField
} from "@mui/material"; //import the mui component 

import { makeStyles } from '@mui/styles'; //import the makestyles 
import InvoiceTable from "../components/InvoiceTable";
// ==========================================================


// useStyles use here
const useStyles = makeStyles(() => ({

    logoContent: {
        textAlign: "center",
    },

    productbutton: {
        backgroundColor: "black !important",
        color: "white !important",
        borderRadius: "0px !important",
        fontSize: "11 !important",
    },
}));

const customers = [
    { customer: 'customer1' },
    { customer: 'customer2' },
    { customer: 'customer3' },
    { customer: 'customer4' },
    { customer: 'customer5' },
];

const Invoice = () => {



    const [itemsall, setItems]: any = useState();
    const [quantity, setQuantity]: any = useState(Number);
    const [itemTotal, setItemTotal]: any = useState(Number)


    const selectedItem = (value: any) => {
        setItems(value);
    }



    const handelChangeItemQty = (e: any) => {

        setQuantity(e.target.value)
    }

    useEffect(() => {
        setItemTotal(quantity * itemsall?.price)
    }, [itemsall, quantity])

    const defaultProps = {
        options: customers,
        getOptionLabel: (option: any) => option.customer,
    };


    const classes = useStyles();
    return (
        // Container Start here
        <>

            <Container
                sx={{ mt: 5, mb: 3, backgroundColor: "white" }}
                maxWidth="md"
            >
                <Grid container spacing={5}>
                    <Grid item md={12} xs={12} sm={12} className={classes.logoContent}>
                        <h2>
                            Invo<span style={{ color: "orange" }}>ic</span>e
                        </h2>

                        <p>Customer Invoic</p>

                    </Grid>
                </Grid>

                {/* <Grid container spacing={3} sx={{ mt: 1 }}> */}
                {/* <Grid item md={5.5} sm={6} xs={12}>

                        <Card sx={{ boxShadow: "none", border: "1px solid #efefef" }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14, fontWeight: "bold" }} color="text.primary" gutterBottom>
                                    Amazing Company
                                </Typography>
                                <Typography variant="body2" component="div">
                                    123 Kingstone Ave
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    Toronto, On Canada A1BG5FG
                                </Typography>
                                <Typography variant="body2">
                                    416-555-254

                                </Typography>
                            </CardContent>
                        </Card>


                    </Grid> */}

                {/* <Grid item md={1} sm={0} xs={12}>
                    </Grid> */}
                {/* personal Information portion start */}
                {/* <Grid item md={5.5} sm={6} xs={12}>
                        <Card sx={{ boxShadow: "none", border: "1px solid #efefef" }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14, fontWeight: "bold" }} color="text.primary" gutterBottom>
                                    Customer#  <span style={{ paddingLeft: "25px" }}>123456</span>
                                </Typography>

                                <Typography sx={{ fontSize: 14, fontWeight: "bold" }} color="text.primary" gutterBottom>
                                    Invoice#  <span style={{ paddingLeft: "25px" }}>123456</span>
                                </Typography>

                                <Typography sx={{ fontSize: 14, fontWeight: "bold" }} color="text.primary" gutterBottom>
                                    Date#    <span style={{ paddingLeft: "25px" }}>2022-07-11</span>
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid> */}

                <Grid container spacing={2} sx={{
                    mt: 2, p
                        : 2
                }}>
                    <Grid item lg={4} md={3} xs={12} sm={12}  >
                        <Autocomplete
                            fullWidth
                            {...defaultProps}
                            id="clear-on-escape"
                            clearOnEscape
                            onChange={(event, value) => selectedItem(value)}
                            renderInput={(params) => (
                                <TextField {...params} label="Select Customer" variant="standard" />
                            )}
                        />

                    </Grid>

                    <Grid item lg={4} md={3} xs={12} sm={12}  >

                        <TextField fullWidth id="code" label="Invoice Number " variant="standard" />
                    </Grid>

                    <Grid item lg={4} md={3} xs={12} sm={12}  >

                        <TextField
                            fullWidth
                            id="date"
                            label="Invoice Date"
                            type="date"
                            defaultValue="2017-05-24"
                            variant="standard"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>


                </Grid>
                <Box>
                    <InvoiceTable handelChangeItemQty={handelChangeItemQty} selectedItem={selectedItem} itemsall={itemsall} itemTotal={itemTotal} />
                </Box>



                <Grid container spacing={3} sx={{ mt: 0.5 }}>

                    <Grid item lg={12} md={12} xs={12} sm={12} sx={{ display: "flex", justifyContent: "right" }} >

                        <Button variant="outlined" sx={{ boxShadow: "none", borderRadius: "0px" }}>Add Item</Button>
                    </Grid>
                    <Grid item md={5.5} sm={6} xs={12}>

                    </Grid>

                    <Grid item md={1} sm={0} xs={12}>
                    </Grid>
                    {/* personal Information portion start */}
                    <Grid item md={5.5} sm={6} xs={12}>
                        <Card sx={{ boxShadow: "none", border: "1px solid #efefef" }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14, fontWeight: "bold" }} color="text.primary" gutterBottom>
                                    Subtotal  <span style={{ paddingLeft: "200px" }}>Rs 150.00</span>
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Grid container spacing={1} sx={{ mt: 3 }}>

                    <Grid item lg={12} md={12} xs={12} sm={12} sx={{ display: "flex", justifyContent: "right" }} >

                        <Button variant="contained" color="success" sx={{ boxShadow: "none", borderRadius: "0px" }}>Submit</Button>
                    </Grid>
                </Grid>

            </Container>
            {/* // Container end here */}
        </>
    );
};

export default Invoice; //export the default component 
