import React from 'react'
import { Container, Grid, Button, TextField } from '@mui/material'
import { useForm, SubmitHandler } from "react-hook-form";
import { addDoc, collection } from 'firebase/firestore';
import { customerRef, firebaseDB } from '../app/config/firebaseConfig/firebaseConfig';
import SuccessToastr from '../components/shared/toastr/SuccessToastr';
import ProgressBarCircle from '../components/shared/porgress-bar/ProgressBarCircle';



const AddCustomer = () => {

    // @states
    // @toastr state
    const [showToastr, setShowToastr] = React.useState<boolean>(false)
    const [showProgressBar, setShowProgressBar] = React.useState<boolean>(false)

    interface CustomerData {
        customer_name: string;
        customer_address: string;
        customer_contact: string;
    }

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<CustomerData>();



    // @ handle form submit
    const onSubmit = async (data: CustomerData) => {
        console.log(data);
        let newCustomerRef = await addDoc(customerRef, data);
        setShowProgressBar(true)

        console.log("Document written with ID: ", newCustomerRef.id);

        if(newCustomerRef.id){
            setShowProgressBar(false)
            reset()
            setShowToastr(true)
        }

    }





    return (
        <div>
            <Container
                sx={{ mt: 5, mb: 3, backgroundColor: "white" }}
                maxWidth="md"
            >
                <ProgressBarCircle show={showToastr}/>
                <SuccessToastr message='New Customer Added Successfully' show={showToastr} />

               

                <Grid container spacing={5}>
                    <Grid item md={12} xs={12} sm={12} >
                        <h2>
                            Add<span style={{ color: "orange" }}>Customer</span>
                        </h2>

                    </Grid>
                </Grid>



                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2} sx={{ mt: 3 }}>
                        <Grid item lg={12} md={4} sm={6} xs={12}   >
                            <TextField {...register('customer_name')} fullWidth id="customer" label="Customer Name" variant="standard" />
                        </Grid>

                        <Grid item lg={12} md={4} sm={6} xs={12}   >
                            <TextField {...register('customer_address')} fullWidth id="address" label="Customer Address" variant="standard" />
                        </Grid>

                        <Grid item lg={12} md={4} sm={6} xs={12}   >
                            <TextField {...register('customer_contact')} fullWidth id="contact" label="Contact No" variant="standard" />
                        </Grid>


                        <Grid item lg={12} md={12} xs={12} sm={12} sx={{ display: "flex", mt: 1 }} >

                            <Button type='submit' variant="outlined" sx={{ boxShadow: "none", borderRadius: "0px" }}>Submit </Button>
                        </Grid>
                    </Grid>
                </form>



            </Container>
        </div>
    )
}

export default AddCustomer