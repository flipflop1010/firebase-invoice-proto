import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container } from '@mui/material';

const Home = () => {
  return (
    <>
    <div className="container">
        <NavLink style={{ marginLeft:'10px' }} to='/'>Home</NavLink>
        <NavLink style={{ marginLeft:'10px' }} to='/customer'>Customer</NavLink>
        <NavLink style={{ marginLeft:'10px' }} to='/product'>Product</NavLink>
        <NavLink style={{ marginLeft:'10px' }} to='/invoice'>Invoice</NavLink>
    </div>

    
   
        
   
    
        

    </>
  )
}

export default Home