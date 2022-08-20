import React from 'react'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore';
import { firebaseDB } from '../app/config/firebaseConfig/firebaseConfig';
import { Container, Grid } from '@mui/material';
import productService from '../app/services/ProductService';

const ProductView = () => {
    const params = useParams();

    const [product, setProduct] = React.useState<any>({})


    const getProduct = async () => {
      const res=await productService.fetch(params.id)
        if(res.success){
            setProduct(res.data);
        }
    }

    React.useEffect(() => {
        getProduct();



    }, [])

 


    return (
        <React.Fragment>
            <Container
                sx={{ mt: 5, mb: 3, backgroundColor: "white" }}
                maxWidth="md"
            >
                <Grid container spacing={5}>
                    <Grid item md={12} xs={12} sm={12} >
                        <h2>
                            Product<span style={{ color: "orange" }}>View</span>
                        </h2>

                    </Grid>
                </Grid>

                <Grid container sx={{ mt: 1 }} spacing={5}>
                    <Grid item md={4} xs={12} sm={12} >
                        <h5>
                            Product<span >Code</span>
                        </h5>
                        <p style={{ marginTop:"10px" }}>{product.product_code}</p>

                    </Grid>

                    <Grid item md={4} xs={12} sm={12} >
                        <h5>
                            Product<span >Name</span>
                        </h5>
                        <p style={{ marginTop:"10px" }}>{product.product_name}</p>

                    </Grid>

                    <Grid item md={4} xs={12} sm={12} >
                        <h5>
                            Product<span >Price</span>
                        </h5>
                        <p style={{ marginTop:"10px" }}>{product.product_price}</p>

                    </Grid>
                </Grid>


            </Container>
        </React.Fragment>
    )
}

export default ProductView