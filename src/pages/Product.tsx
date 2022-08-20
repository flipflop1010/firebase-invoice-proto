import React from 'react'
import { Container, Grid, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material'
import { NavLink } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import ProductModel from '../app/data-models/ProductModel';
import productService from '../app/services/ProductService';

import VisibilityIcon from '@mui/icons-material/Visibility';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { red } from '@mui/material/colors';
import ProgressBarCircle from '../components/shared/porgress-bar/ProgressBarCircle';

const Product = () => {

    const [showProgressBar, setShowProgressBar] = React.useState<boolean>(false)
    const [products, setProducts] = React.useState<ProductModel[]>()

    const getProducts = async () => {
        setShowProgressBar(true);
        const res = await productService.fetchAll();
        console.log(res);
        if (res.success)
            setShowProgressBar(false);
        setProducts(res.data)
    }


    React.useEffect(() => {
        getProducts()
    }, [])



    // @ delete customer handle
    const handleProductDelete = async (id: any) => {
        console.log('delete id', id);
        if (!window.confirm('are u sure?')) {
            return;
        }
        setShowProgressBar(true);

        const res = await productService.delete(id);
        // console.log(res);
        if (res.success) {

            setShowProgressBar(false);

            getProducts();
        }


    }

    // React.useEffect(()=>{
    //     if(showProgressBar){
    //         setShowProgressBar(false)
    //     }
    // },[showProgressBar])





    return (
        <div>


            <Container
                sx={{ mt: 5, mb: 3, backgroundColor: "white" }}
                maxWidth="md"
            >
                {showProgressBar && (<ProgressBarCircle show={showProgressBar} />)}

                <Grid container spacing={5}>
                    <Grid item md={12} xs={12} sm={12} >
                        <h2>
                            Product<span style={{ color: "orange" }}>List</span>
                        </h2>

                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 3 }}>
                    <Grid item lg={12} md={12} xs={12} sm={12} sx={{ display: "flex", justifyContent: "right", mt: 1 }} >

                        <Button variant="outlined" component={NavLink} to={`/product-add`} sx={{ boxShadow: "none", borderRadius: "0px" }}>Add Product</Button>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}   >
                        <TableContainer >
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>#</TableCell>
                                        <TableCell >Product Code</TableCell>
                                        <TableCell >Product Name</TableCell>
                                        <TableCell >Price </TableCell>
                                        <TableCell >Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {products?.length && products.map((product, index) => (



                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {product.product_code}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {product.product_name}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {product.product_price}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                <IconButton color='primary' aria-label="view" component={NavLink} to={`/product-view/${product.id}`}>
                                                    <VisibilityIcon />
                                                </IconButton>

                                                <IconButton color='success' aria-label="edit" component={NavLink} to={`/product-edit/${product.id}`}>
                                                    <EditOutlinedIcon />
                                                </IconButton>

                                                <Button sx={{ color: red[900] }} aria-label="delete" onClick={() => { handleProductDelete(product.id) }}>
                                                    <DeleteIcon />
                                                </Button>
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

export default Product