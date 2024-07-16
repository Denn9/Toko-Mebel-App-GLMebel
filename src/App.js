
import React, { Component } from 'react';
import Dashboard from './Dashboard';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Ekatalog from './ekatalog';
import CaraOrder from './CaraOrder';
import Produk from './Produk';
import Aboutus from './Aboutus';
import Register from './Register';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Header from './Header';
import HalamanSuka from './HalamanSuka';
import Pembayaran from './Pembayaran';
import ProdukDetail from './ProdukDetail';
import DashboardSA from './DashboardSA';
import FurnitureListSA from './FurnitureListSA';
import OrderTableSA from './OrderTableSA';
import InputAdminSA from './InputAdminSA';
import DataAdminSA from './DataAdminSA';
import LaporanPenjualanSA from './LaporanPenjualanSA';
import DashboardA from './DashboardA';
import FurnitureListA from './FurnitureListA';
import OrderTableA from './OrderTableA';
import ContentDATASA from './ContentDATASA';
import ContentSA from './ContentSA';
import ContentA from './ContentA';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/Pembayaran' element={<Pembayaran/>}/>
        <Route path='/ekatalog' element={<Ekatalog/>}/>
        <Route path='/Produk' element={<Produk/>}/>
        <Route path='/Aboutus' element={<Aboutus/>}/>
        <Route path='/CaraOrder' element={<CaraOrder/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
        <Route path='/HalamanSuka' element={<HalamanSuka/>}/>
        <Route path='/ProdukDetail' element={<ProdukDetail/>}/>
        <Route path='/DashboardSA' element={<DashboardSA/>}/>
        <Route path='/FurnitureListSA' element={<FurnitureListSA/>}/>
        <Route path='/OrderTableSA' element={<OrderTableSA/>}/>
        <Route path='/InputAdminSA' element={<InputAdminSA/>}/>
        <Route path='/DataAdminSA' element={<DataAdminSA/>}/>
        <Route path='/LaporanPenjualanSA' element={<LaporanPenjualanSA/>}/>
        <Route path='/DashboardA' element={<DashboardA/>}/>
        <Route path='/FurnitureListA' element={<FurnitureListA/>}/>
        <Route path='/OrderTableA' element={<OrderTableA/>}/>
        <Route path='/ContentDATASA' element={<ContentDATASA/>}/>
        <Route path='/ContentSA' element={<ContentSA/>}/>
        <Route path='/ContentA' element={<ContentA/>}/>
      </Routes>
    </Router>
  );
};

export default App;