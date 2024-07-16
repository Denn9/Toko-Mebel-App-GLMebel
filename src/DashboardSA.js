import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DashboardSA.css';
import OrderTableSA from './OrderTableSA';

import logo from './Gambar/Logo.png'

const DashboardSA = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/contentDATASA'); 
  };

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
            <span>Halo, Admin</span>
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
        <main className="main-content card">
          <h3>Input Data Furniture</h3>
          <form className="furniture-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="namaFurniture">
                Nama Furniture<span className="bintang">*</span>
              </label>
              <input type="text" id="namaFurniture" name="namaFurniture" required />
            </div>
            <div className="input-group">
              <label htmlFor="hargaFurniture">
                Harga Furniture<span className="bintang">*</span>
              </label>
              <input type="text" id="hargaFurniture" name="hargaFurniture" required />
            </div>
            <div className="input-group">
              <label htmlFor="fotoFurniture">
                Foto Furniture<span className="bintang">*</span>
              </label>
              <input type="file" id="fotoFurniture" name="fotoFurniture" required />
            </div>
            <div className="button-container">
              <button type="submit">Submit</button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default DashboardSA;