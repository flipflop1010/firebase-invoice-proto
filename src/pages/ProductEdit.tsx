import React from 'react'
import { Container, Grid, Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form';
import ProductModel from '../app/data-models/ProductModel';
import productService from '../app/services/ProductService';
import { useParams, useNavigate } from 'react-router-dom';
const ProductEdit = () => {



  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<ProductModel>();

  const params = useParams();
  const navigate=useNavigate();

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

  React.useEffect(()=>{
    reset(product)
  },[product])



  // @ handle form submit
  const onSubmit = async(data: ProductModel) => {
    console.log(data);
    
    const res=await productService.update(params.id,data);
    if(res.success){
        navigate('/product')
    }
    

}


  return (
    <div>
      <Container
        sx={{ mt: 5, mb: 3, backgroundColor: "white" }}
        maxWidth="md"
      >
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
            <TextField {...register('product_code')} fullWidth id="code" label="Product Code" variant="standard" defaultValue={' '} />
          </Grid>

          <Grid item lg={4} md={4} sm={6} xs={12}   >
            <TextField {...register('product_name')} fullWidth id="name" label="Product Name" variant="standard" defaultValue={' '} />
          </Grid>


          <Grid item lg={4} md={4} sm={6} xs={12}   >
            <TextField {...register('product_price')} fullWidth id="price" label="Price " variant="standard" defaultValue={' '} />
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

export default ProductEdit