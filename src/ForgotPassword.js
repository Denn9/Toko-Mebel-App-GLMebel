// src/Login.js
import React from 'react';
import './ForgotPassword.css'; 
import Header from './Header';
import Footer from './Footer';
import Register from './Register';
import { Helmet } from 'react-helmet';

const ForgotPassword = () => {
  return (
    <>
      <Header />
      <section className="ForgotPassword-pelanggan">
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
        <div className="ForgotPassword-box">
          <h3><span className='bintang'>Kehilangan password?</span> Silakan masukkan nama pengguna atau 
alamat email Anda. Anda akan menerima tautan untuk membuat 
kata sandi baru  melalui email.</h3>
          <form>
            <div className="input-group">
              <label htmlFor="username">Nama pengguna atau alamat email<span className='bintang'>*</span></label>
              <input type="text" id="username" name="username" required />
            </div>
            <button type="submit" className='forgotpassword'>ForgotPassword</button>
          </form>
          <div className="forgot-masuk">
           <p>Klik di sini untuk<a href="/Login">Masuk</a></p> 
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ForgotPassword;
