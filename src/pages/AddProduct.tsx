import React from 'react'
import { Container, Grid, Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form';
import ProductModel from '../app/data-models/ProductModel';
import productService from '../app/services/ProductService';
import ProgressBarCircle from '../components/shared/porgress-bar/ProgressBarCircle';
import { useNavigate, useParams } from 'react-router-dom';
const AddProduct = () => {
  const navigate = useNavigate();
  const [showProgressBar, setShowProgressBar] = React.useState<boolean>(false)

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<ProductModel>();




  // @ handle form submit
  const onSubmit = async (data: ProductModel) => {
    console.log(data);
    setShowProgressBar(true);
    const res = await productService.add(data);

    setShowProgressBar(false);

    reset()
    console.log(res);
    navigate('/product');


  }


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
              Add<span style={{ color: "orange" }}>Product</span>
            </h2>

          </Grid>
        </Grid>


        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} sx={{ mt: 3 }}>

            <Grid item lg={4} md={4} sm={6} xs={12}   >
              <TextField {...register('product_code')} fullWidth id="code" label="Product Code" variant="standard" />
            </Grid>

            <Grid item lg={4} md={4} sm={6} xs={12}   >
              <TextField {...register('product_name')} fullWidth id="name" label="Product Name" variant="standard" />
            </Grid>


            <Grid item lg={4} md={4} sm={6} xs={12}   >
              <TextField {...register('product_price')} fullWidth id="price" label="Price " variant="standard" />
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12} sx={{ display: "flex", justifyContent: "right", mt: 1 }} >

              <Button type='submit' variant="outlined" sx={{ boxShadow: "none", borderRadius: "0px" }}>Save </Button>
            </Grid>
          </Grid>
        </form>



      </Container>
    </div>
  )
}

export default AddProduct