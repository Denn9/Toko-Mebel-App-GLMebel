import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './InputAdminSA.css';
import './FurnitureListSA.css';
import logo from './Gambar/Logo.png'

const InputAdminSA = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate('/contentSA'); 
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
        <main className="main-content card">
          <h3>Input Data Admin</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="namaAdmin">
                Nama Admin<span className="bintang">*</span>
              </label>
              <input type="text" id="namaAdmin" name="namaAdmin" required />
            </div>
            <div className="input-group">
              <label htmlFor="passwordAdmin">
                Password Admin<span className="bintang">*</span>
              </label>
              <input type="password" id="passwordAdmin" name="passwordAdmin" required />
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

export default InputAdminSA;