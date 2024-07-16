import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ContentSA.css';
import logo from './Gambar/Logo.png';

const ContentSA = () => {
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
          <h3>Input Furniture</h3>
          <ul>
             <li><Link to="/DashboardSA">Input Furniture</Link></li>
            <li><Link to="/FurnitureListSA">Data Furniture</Link></li>
            <li><Link to="/OrderTableSA">Orderan</Link></li>
            <li><Link to="/InputAdminSA">Input Admin</Link></li>
            <li><Link to="/DataAdminSA">Data Admin</Link></li>
            <li><Link to="/LaporanPenjualanSA">Laporan Penjualan</Link></li>
          </ul>
        </aside>
        <div className="content">
          <div className="status-box">
            <p>Data Furniture Telah Ditambahkan!!</p>
            <Link to="/DataAdminSA" className="status-button">Lihat Status Data</Link>
            <Link to="/InputAdminSA" className="status-button">Input Data Lain</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSA;