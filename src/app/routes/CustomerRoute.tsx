import React from 'react'


import Customer from '../../pages/Customer';
import AddCustomer from '../../pages/AddCustomer';
import CustomerView from '../../pages/CustomerView';
import CustomerEdit from '../../pages/CustomerEdit';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

const CustomerRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Customer />} />
        <Route path="/customer-add" element={<AddCustomer />} />
        <Route path="/customer-view/:id" element={<CustomerView />} />
        <Route path="/customer-edit/:id" element={<CustomerEdit />} />
        <Route path="/customer-delete/:id" element={<CustomerView />} />
      </Routes>
    </>
  )
}

export default CustomerRoute