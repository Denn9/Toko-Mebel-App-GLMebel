import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Pembayaran.css';
import Header from './Header';
import Footer from './Footer';
import unggulan1 from './Gambar/Unggulan1.png';
import { Helmet } from 'react-helmet';

const ItemQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="item-quantity">
      <button className="minus" onClick={handleDecrement}>-</button>
      <input type="number" value={quantity} readOnly />
      <button className="plus" onClick={handleIncrement}>+</button>
    </div>
  );
};

const Pembayaran = () => {
  return (
    <section id="dashboar">
      <div className="Dashboard">
        <Header />
       
        <main>
        <h3 className="Anda">Keranjang Anda</h3>
          <section className="cart">
          <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
            <div className="cart-item">
              <div className="item-labels">
                <span className="label">Nama Furniture</span>
                <span className="label">Harga</span>
                <span className="label">Jumlah</span>
                <span className="label">Subtotal</span>
              </div>
              <div className="item-details">
                <div className="detaaill">
                  <img src={unggulan1} alt="Almari Penyekat Ruangan" />
                  <div className="details">
                    <span className="item-name">Almari Penyekat Ruangan</span>
                    <span className="item-price">RP 400,000</span>
                    <ItemQuantity />
                    <span className="item-subtotal">RP 400,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-summary">
              <h2>Total Keranjang Belanja</h2>
              <div className="summary-detail">
                <span>Subtotal</span>
                <span>RP 400,000</span>
              </div>
              <div className="shipping-option">
                <label>
                  <input type="radio" name="shipping" /> Ambil Sendiri
                </label>
                <label>
                  <input type="radio" name="shipping" /> Gratis Ongkir Daerah Jatim
                </label>
              </div>
              <input type="text" placeholder="Jawa Timur" />
              <input type="text" placeholder="Surabaya" />
              <input type="text" placeholder="Kode Pos" />
              <button>Perbarui Total</button>
              <div className="total">
                <span>Total</span>
                <span>RP 400,000</span>
              </div>
              <button>Lanjutkan Ke Checkout</button>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </section>
  );
};

export default Pembayaran;
