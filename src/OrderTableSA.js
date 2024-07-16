import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './OrderTableSA.css'; 
import logo from './Gambar/Logo.png'

const orders = [
  { date: '06/03/2024', name: 'Almari Kaca', price: 'RP 400,000', buyer: 'Sahhitya', address: 'Japanan Pasuruan', items: 1 },
];

const OrderTableSA = () => {
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    navigate('/'); 
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
        <img src={logo} alt="GL Mebel" className="logo" />
        </div>
        <div className="header-right">
          <div className="user-info">
            <span>Halo, Super Admin</span>
          </div>
          <button className="logout-button" onClick={handleLogout}>Log Out</button>
        </div>
      </header>
      <div className="dashboard">
      <aside className="sidebar card">
          <ul>
            <li><Link to="/DashboardSA">Input Furniture</Link></li>
            <li><Link to="/FurnitureListSA">Data Furniture</Link></li>
            <li><Link to="/OrderTableSA">Orderan</Link></li>
            <li><Link to="/InputAdminSA">Input Admin</Link></li>
            <li><Link to="/DataAdminSA">Data Admin</Link></li>
            <li><Link to="/LaporanPenjualanSA">Laporan Penjualan</Link></li>
          </ul>
        </aside>
        <div className="main-content">
          <Typography variant="h5" gutterBottom>
            Data Orderan
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Tgl Pembelian</TableCell>
                  <TableCell>Nama Furniture</TableCell>
                  <TableCell>Harga Furniture</TableCell>
                  <TableCell>Nama Pembeli</TableCell>
                  <TableCell>Alamat Pembeli</TableCell>
                  <TableCell>Barang</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order, index) => (
                  <TableRow key={index}>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{order.name}</TableCell>
                    <TableCell>{order.price}</TableCell>
                    <TableCell>{order.buyer}</TableCell>
                    <TableCell>{order.address}</TableCell>
                    <TableCell>{order.items} Barang</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default OrderTableSA;