import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ContentA.css';
import logo from './Gambar/Logo.png';

const ContentA = () => {
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
            <li><Link to="/DashboardA">Input Furniture</Link></li>
            <li><Link to="/FurnitureListA">Data Furniture</Link></li>
            <li><Link to="/OrderTableA">Orderan</Link></li>
          </ul>
        </aside>
        <div className="content">
          <div className="status-box">
            <p>Data Furniture Telah Ditambahkan!!</p>
            <Link to="/FurnitureListA" className="status-button">Lihat Status Data</Link>
            <Link to="/DashboardA" className="status-button">Input Data Lain</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentA;