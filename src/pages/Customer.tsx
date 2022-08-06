
import React from 'react'
import { Container, Grid, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material'
import { NavLink } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
const Customer = () => {
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

                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            1
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            Test Customer
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            Amta Joypur
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            7845457845
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <IconButton aria-label="delete">
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>


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