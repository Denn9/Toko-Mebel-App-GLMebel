import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './HalamanSuka.css';
import Header from './Header';
import Footer from './Footer';
import unggulan1 from './Gambar/Unggulan1.png';
import { Helmet } from 'react-helmet';


const HalamanSuka = () => {
  return (
    <section id="HalamanSuka">
      <div className="HalamanSuka">
        <Header />
        <h3 className="Anda-HalamanSuka">My Wishlist</h3>
        <main className='Halaman-Suka'>
          <section className="cart-HalamanSuka">
          <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
            <div className="cart-item-HalamanSuka">
              <div className="item-labels-HalamanSuka">
                <span className="label-HalamanSuka">Nama Furniture</span>
                <span className="label-HalamanSuka">Harga</span>
                <span className="label-HalamanSuka">Stock</span>
                <span className="label-HalamanSuka">Action</span>
              </div>
              <div className="item-details-HalamanSuka">
                <div className="detaaill-HalamanSuka">
                  <img src={unggulan1} alt="Almari Penyekat Ruangan" />
                  <div className="details-HalamanSuka">
                    <span className="item-name-HalamanSuka">Almari Penyekat Ruangan</span>
                    <span className="item-price-HalamanSuka">RP 400,000</span>
                    <span className="item-price-HalamanSuka">In Stock</span>
                    <div className="item-actions-HalamanSuka">
                      <button className="action-button">Add To Chart</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-details-HalamanSuka">
                <div className="detaaill-HalamanSuka">
                  <img src={unggulan1} alt="Almari Penyekat Ruangan" />
                  <div className="details-HalamanSuka">
                    <span className="item-name-HalamanSuka">Almari Penyekat Ruangan</span>
                    <span className="item-price-HalamanSuka">RP 400,000</span>
                    <span className="item-price-HalamanSuka">In Stock</span>
                    <div className="item-actions-HalamanSuka">
                      <button className="action-button">Add To Chart</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-details-HalamanSuka">
                <div className="detaaill-HalamanSuka">
                  <img src={unggulan1} alt="Almari Penyekat Ruangan" />
                  <div className="details-HalamanSuka">
                    <span className="item-name-HalamanSuka">Almari Penyekat Ruangan</span>
                    <span className="item-price-HalamanSuka">RP 400,000</span>
                    <span className="item-price-HalamanSuka">In Stock</span>
                    <div className="item-actions-HalamanSuka">
                      <button className="action-button">Add To Chart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </section>
  );
};

export default HalamanSuka;
