import React from 'react'
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import Invoice from '../../pages/Invoice';
import Customer from '../../pages/Customer';
import AddCustomer from '../../pages/AddCustomer';
import Product from '../../pages/Product';
import AddProduct from '../../pages/AddProduct';
import CustomerView from '../../pages/CustomerView';
import CustomerEdit from '../../pages/CustomerEdit';
import ProductView from '../../pages/ProductView';
import ProductEdit from '../../pages/ProductEdit';
import CustomerRoute from './CustomerRoute';
import Home from '../../pages/Home';




const MasterRoute = () => {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Home/>}></Route>

        <Route path='customer/*' element={<CustomerRoute/>} >

        </Route>
        
          {/* <Route path="/customer-add" element={<AddCustomer />} />
          <Route path="/customer-view/:id" element={<CustomerView />} />
          <Route path="/customer-edit/:id" element={<CustomerEdit />} />
          <Route path="/customer-delete/:id" element={<CustomerView />} /> */}
          <Route path="/product" element={<Product />} />
          <Route path="/product-view/:id" element={<ProductView />} />
          <Route path="/product-add" element={<AddProduct />} />
          <Route path="/product-edit/:id" element={<ProductEdit />} />
          <Route path="/invoice" element={<Invoice />} />
      </Routes>


    </Router>
  )
}

export default MasterRoute