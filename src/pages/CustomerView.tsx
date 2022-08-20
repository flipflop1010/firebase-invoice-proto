import React from 'react'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore';
import { firebaseDB } from '../app/config/firebaseConfig/firebaseConfig';
import { Container, Grid } from '@mui/material';

const CustomerView = () => {
    const params = useParams();

    const [customer, setCustomer] = React.useState<any>({})


    const getCustomer = async () => {
        const docRef = doc(firebaseDB, "customers", `${params.id}`);
        const docSnap = await getDoc(docRef);

        // return docSnap.data()
        let data: any = docSnap.data();
        data['id'] = docSnap.id;
        // return data;
        setCustomer(data);

    }

    React.useEffect(() => {
        getCustomer();



    }, [])

    React.useEffect(() => {
        console.log(customer);
    }, [customer])


    return (
        <React.Fragment>
            <Container
                sx={{ mt: 5, mb: 3, backgroundColor: "white" }}
                maxWidth="md"
            >
                <Grid container spacing={5}>
                    <Grid item md={12} xs={12} sm={12} >
                        <h2>
                            Customer<span style={{ color: "orange" }}>View</span>
                        </h2>

                    </Grid>
                </Grid>

                <Grid container sx={{ mt: 1 }} spacing={5}>
                    <Grid item md={4} xs={12} sm={12} >
                        <h5>
                            Customer<span >Name</span>
                        </h5>
                        <p style={{ marginTop:"10px" }}>{customer.customer_name}</p>

                    </Grid>

                    <Grid item md={4} xs={12} sm={12} >
                        <h5>
                            Customer<span >Address</span>
                        </h5>
                        <p style={{ marginTop:"10px" }}>{customer.customer_address}</p>

                    </Grid>

                    <Grid item md={4} xs={12} sm={12} >
                        <h5>
                            Customer<span >Contact</span>
                        </h5>
                        <p style={{ marginTop:"10px" }}>{customer.customer_contact}</p>

                    </Grid>
                </Grid>


            </Container>
        </React.Fragment>
    )
}

export default CustomerView