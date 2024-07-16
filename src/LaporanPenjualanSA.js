import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LaporanPenjualanSA.css';
import logo from './Gambar/Logo.png'

const ordersData = [
  {
    month: 'JUNI',
    orders: [
      {
        date: '06/03/2024',
        furniture: 'Almari Kaca',
        quantity: 1,
        buyer: 'Sahhitya',
        address: 'Japanan Pasuruan',
        total: 400000,
      },
      {
        date: '06/03/2024',
        furniture: 'Almari Kaca',
        quantity: 2,
        buyer: 'Sahhitya',
        address: 'Japanan Pasuruan',
        total: 800000,
      },
    ],
    monthlyTotal: 3200000,
  },
  
];

const LaporanPenjualanSA = () => {
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
        <div className="orders">
          <h2>Data Orderan</h2>
          {ordersData.map((monthData, index) => (
            <div key={index} className="monthly-orders">
              <h3>{monthData.month}</h3>
              <table>
                <thead>
                  <tr>
                    <th>Tanggal Orderan</th>
                    <th>Nama Furniture</th>
                    <th>Nama Pembeli</th>
                    <th>Alamat Pembeli</th>
                    <th>Total Orderan</th>
                  </tr>
                </thead>
                <tbody>
                  {monthData.orders.map((order, idx) => (
                    <tr key={idx}>
                      <td>{order.date}</td>
                      <td>{order.furniture} ({order.quantity})</td>
                      <td>{order.buyer}</td>
                      <td>{order.address}</td>
                      <td>{order.total.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="4">Total Orderan Bulanan</td>
                    <td>{monthData.monthlyTotal.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LaporanPenjualanSA;