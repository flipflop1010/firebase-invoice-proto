
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
    TextField,
    Stack
} from "@mui/material"; //import the mui component 

import { makeStyles } from '@mui/styles'; //import the makestyles 
import InvoiceTable from "../components/InvoiceTable";
import CustomerModel from '../app/data-models/CustomerModel';
import customerService from '../app/services/CustomerService';
import ProgressBarCircle from '../components/shared/porgress-bar/ProgressBarCircle';
import moment from "moment";
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
        fontSize: "11 !important"
    }



}));





// const customers = [
//     { customer: 'customer1' },
//     { customer: 'customer2' },
//     { customer: 'customer3' },
//     { customer: 'customer4' },
//     { customer: 'customer5' },
// ];




// @flip@ main component
const Invoice = () => {



    const [itemsall, setItems]: any = useState();
    const [quantity, setQuantity]: any = useState(Number);
    const [itemTotal, setItemTotal]: any = useState(Number)
    // @flip@ circle preloader
    const [showProgressBar, setShowProgressBar] = React.useState<boolean>(false)

    // @flip@ customer state
    const [customers, setCustomers] = React.useState<CustomerModel[]>();



    const initAsyncCall = async () => {

        try {
            setShowProgressBar(true);
            let customers = await customerService.fetchAll();
            console.log(customers);
            setCustomers(customers.data);
            setShowProgressBar(false)
        } catch (error) {

        }



    }


    // @flip@ init useEffect
    React.useEffect(() => {
        // console.log('moment',moment().format("DD/MM/YYYY"));
        // console.log('customers', customers);
        // initAsyncCall()

        
    }, [])




    const selectedItem = (value: any) => {
        console.log('selected Item value',value);
        
        setItems(value);
    }

    // @flip@ handle Customer Search
    const handleCustomerSearch=async (event:any)=>{
       let keyword=event.target.value;

       if(keyword && keyword.length>=2){
        let res=await customerService.fetchByName(keyword);

        if(res.success){
            setCustomers(res.data)
        }
       }
        
    }



    const handelChangeItemQty = (e: any) => {

        setQuantity(e.target.value)
    }

    useEffect(() => {
        setItemTotal(quantity * itemsall?.price)
    }, [itemsall, quantity])

    const defaultProps = {
        options: customers?.length?customers:[],
        getOptionLabel: (option: CustomerModel) => option.customer_name,
    };


    const classes = useStyles();
    return (
        // Container Start here
        <>
            {showProgressBar && (<ProgressBarCircle show={showProgressBar} /> )}
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


                <Grid container spacing={2} sx={{
                    mt: 2, p
                        : 2
                }}>
                    <Grid item lg={4} md={3} xs={12} sm={12}  >
                       
                        {/* <Autocomplete
                        
                            fullWidth
                           {...defaultProps}
                            id="clear-on-escape"
                            clearOnEscape
                            onChange={(event, value) => selectedItem(value)}
                            renderInput={(params) => (
                                <TextField {...params} label="Select Customer" variant="standard" />
                            )}
                        /> */}

                        <Autocomplete
                              {...defaultProps}
                                id="auto-complete"
                                autoComplete
                                includeInputInList
                                onChange={(event,value)=>selectedItem(value)}
                                onKeyUp={(event)=>{handleCustomerSearch(event)}
                                }
                                renderInput={(params) => (
                                <TextField {...params} label="Customer Name" variant="standard" />
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
                            defaultValue={moment().format("YYYY-MM-DD")}
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

                        {/* <Button variant="outlined" sx={{ boxShadow: "none", borderRadius: "0px" }}>Add Item</Button> */}
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
