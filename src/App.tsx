import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Invoice from './pages/Invoice';
import Customer from './pages/Customer';
import AddCustomer from './pages/AddCustomer';
import Product from './pages/Product';
import AddProduct from './pages/AddProduct';
import CustomerView from './pages/CustomerView';
import CustomerEdit from './pages/CustomerEdit';



function App() {
  return (
    <div>
      <Router>

        <Routes>
          <Route path="/" element={<Customer />} />
          <Route path="/customer-add" element={<AddCustomer />} />
          <Route path="/customer-view/:id" element={<CustomerView />} />
          <Route path="/customer-edit/:id" element={<CustomerEdit />} />
          <Route path="/customer-delete/:id" element={<CustomerView />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product-add" element={<AddProduct />} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
