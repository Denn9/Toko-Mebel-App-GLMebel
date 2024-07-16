import React from 'react';
import StyleHeader from './StyleHeader.css'
import Keranjang from './Gambar/Suka.png';
import Ekatalog from './ekatalog';
import Aboutus from './Aboutus';
import HalamanSuka from './HalamanSuka';
import Produk from './Produk';
import CaraOrder from './CaraOrder';
import Suka from './Gambar/Keranjang.png';
import Login from './Login';
import ProductDetail from './ProdukDetail';
import user from './Gambar/user.png';
import logo1 from './Gambar/Logo.png';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Header = () => {
  return (
    <header className="header-pelanggan">
          <div className="navbar">
            <div className="logo"><img src={logo1} alt="Keranjang" /></div>
            <div className="search-container">
              <input type="text" placeholder="Search" className="search-bar" />
              <button className="search-button">Search</button>
            </div>
            <div className="user-section">
              <div className="cart-icons">
              <Link to="/halamanSuka" className="cart-icon"><img src={Keranjang} alt="Keranjang" style={{ width: '30px', height: '30px' }} /></Link>
              <Link to="/Pembayaran" className="cart-icon"><img src={Suka} alt="Suka" style={{ width: '30px', height: '30px' }} /></Link>
              <Link to="/Login" className="cart-icon"><img src={user} alt="user"  style={{ width: '30px', height: '30px' }}/></Link>
              </div>
              <span className="welcome-text">Selamat Datang, User</span>
            </div>
          </div>
          <nav className="nav-links">
          <Link to="/">Dashboard</Link>
          <Link to="/ekatalog">Ekatalog</Link>
          <Link to="/Produk">Produk</Link>
          <Link to="/Aboutus">Aboutus</Link>   
          <Link to="/CaraOrder">CaraOrder</Link>
          <Link to="/ProdukDetail">CaraOrder</Link>
          </nav>
        </header>
  );
};


export default Header;
