
import React from 'react'
import { Container, Grid, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Stack } from '@mui/material'
import { NavLink } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import { doc, getDocs, collection } from 'firebase/firestore';
import { firebaseDB } from '../app/config/firebaseConfig/firebaseConfig';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { red } from '@mui/material/colors';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
const Customer = () => {

    const [customers, setCustomers] = React.useState<any>()


    const getCustomers = async () => {
        // const docRef = doc(firebaseDB, "customers");
        const docSnap = await getDocs(collection(firebaseDB, "customers"))
        //    console.log(typeof docSnap);
        let temp_arr: any[] = [];
        docSnap.forEach((doc) => {
            // console.log(doc.id);
            let data: any = doc.data()
            data['id'] = doc.id;
            temp_arr.push(data)

        })
        setCustomers(temp_arr)
        // return ["hello"];
        
    }

    //@ fetch all customer data from firebase

    React.useEffect(() => {
        try {
            getCustomers();
        } catch (error) {

        }


    }, [])





    return (
        <div>
            <Container
                sx={{ mt: 5, mb: 3, backgroundColor: "white" }}
                maxWidth="md"
            >
                <Grid container spacing={5}>
                    <Grid item md={12} xs={12} sm={12} >
                        <h2>
                            Customer<span style={{ color: "orange" }}>List</span>
                        </h2>

                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 3 }}>
                    <Grid item lg={12} md={12} xs={12} sm={12} sx={{ display: "flex", justifyContent: "right", mt: 1 }} >

                        <Button variant="outlined" component={NavLink} to={`customer-add`} sx={{ boxShadow: "none", borderRadius: "0px" }}>Add Customer</Button>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}   >
                        <TableContainer >
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>#</TableCell>
                                        <TableCell >Customer Name</TableCell>
                                        <TableCell >Address</TableCell>
                                        <TableCell >Contact No</TableCell>
                                        <TableCell >Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {customers && customers.length && customers.map((customer: any, index: number) => (
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {customer.customer_name}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {customer.customer_address}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {customer.customer_contact}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                <Stack direction="row" spacing={1}>

                                                <IconButton color='primary'  aria-label="view" component={NavLink} to={`customer-view/${customer.id}`}>
                                                    <VisibilityIcon />
                                                </IconButton>

                                                <IconButton color='success' aria-label="edit" component={NavLink} to={`customer-edit/${customer.id}`}>
                                                    <EditOutlinedIcon />
                                                </IconButton>

                                                <IconButton sx={{ color:red[900] }} aria-label="delete" component={NavLink} to={`customer-delete/${customer.id}`}>
                                                    <DeleteIcon />
                                                </IconButton>
                                                </Stack>
                                            </TableCell>
                                        </TableRow>
                                    ))}


                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Customer 