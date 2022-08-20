import React from 'react';
import { Container, Grid, Button, TextField } from '@mui/material'
import ProgressBarCircle from '../components/shared/porgress-bar/ProgressBarCircle';
import SuccessToastr from '../components/shared/toastr/SuccessToastr';
import { addDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { useForm, SubmitHandler } from "react-hook-form";
import { firebaseDB } from '../app/config/firebaseConfig/firebaseConfig';
import { useNavigate, useParams } from 'react-router-dom';

const CustomerEdit = () => {

    const [showToastr, setShowToastr] = React.useState<boolean>(false)
    const [showProgressBar, setShowProgressBar] = React.useState<boolean>(false)

    interface CustomerData {
        customer_name: string;
        customer_address: string;
        customer_contact: string;
    }

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<CustomerData>();


    const params = useParams();
    let navigate = useNavigate();

    const [customer, setCustomer] = React.useState<CustomerData>()


    const getCustomer = async () => {
        const docRef = doc(firebaseDB, "customers", `${params.id}`);
        const docSnap = await getDoc(docRef);

        // return docSnap.data()
        let data: any = docSnap.data();
        data['id'] = docSnap.id;
        // return data;
        setCustomer(data);

    }


    const updateCustomer=async (data:CustomerData)=>{
       return await setDoc(doc(firebaseDB,'customers',`${params.id}`),data)


    }

    React.useEffect(() => {
        getCustomer();



    }, [])

    React.useEffect(() => {
        // console.log(customer);
        reset(customer)
    }, [customer])


    // @ handle form submit
    const onSubmit = async (data: CustomerData) => {
        // console.log(data);
        let a=await updateCustomer(data);
        console.log(a);
        navigate('/');

    }



  return (
    <React.Fragment>
         <Container
                sx={{ mt: 5, mb: 3, backgroundColor: "white" }}
                maxWidth="md"
            >
                {/* <ProgressBarCircle show={showToastr}/>
                <SuccessToastr message='New Customer Added Successfully' show={showToastr} /> */}

               

                <Grid container spacing={5}>
                    <Grid item md={12} xs={12} sm={12} >
                        <h2>
                            Edit <span style={{ color: "orange" }}>Customer</span>
                        </h2>

                    </Grid>
                </Grid>



                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2} sx={{ mt: 3 }}>
                        <Grid item lg={12} md={4} sm={6} xs={12}   >
                            <TextField {...register('customer_name')} fullWidth id="customer" label="Customer Name" variant="standard"  defaultValue={' '} />
                        </Grid>

                        <Grid item lg={12} md={4} sm={6} xs={12}   >
                            <TextField {...register('customer_address')} fullWidth id="address" label="Customer Address" variant="standard"  defaultValue={' '} />
                        </Grid>

                        <Grid item lg={12} md={4} sm={6} xs={12}   >
                            <TextField {...register('customer_contact')} fullWidth id="contact" label="Contact No" variant="standard"   defaultValue={' '}/>
                        </Grid>


                        <Grid item lg={12} md={12} xs={12} sm={12} sx={{ display: "flex", mt: 1 }} >

                            <Button type='submit' variant="outlined" sx={{ boxShadow: "none", borderRadius: "0px" }}>Submit </Button>
                        </Grid>
                    </Grid>
                </form>



            </Container>

    </React.Fragment>
  )
}

export default CustomerEdit