import React, { useState } from 'react';
import './ProdukDetail.css';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import productImage from './Gambar/Unggulan1.png';
import Suka from './Gambar/Suka.png';

const ProdukDetail = () => {
  const [activeTab, setActiveTab] = useState('Deskripsi');

  return (
    <div className="product-detail-page">
      <Header />
      <main className="product-detail">
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </Helmet>
        <div className="product-info">
          <div className="product-images">
            <img src={productImage} alt="Product" className="main-image" />
            <div className="thumbnail-images">
              <img src={productImage} alt="Thumbnail" />
              <img src={productImage} alt="Thumbnail" />
            </div>
          </div>
          <div className="product-details">
            <h1>Almari Penyakat Ruangan</h1>
            <div className="product-rating">
              <span>★★★★★</span> (Belum Ada Ulasan)
            </div>
            <div className="product-price">
              <span className="old-price">RP 400,000</span>
              <span className="new-price">RP 300,000</span>
            </div>
            <div className="product-status">Status: <span className="in-stock">In Stock</span></div>
            <p>Desain modern akan membuat tampilan ruangan semakin menarik. Bean Bag Bulat ini memiliki bahan yang berkualitas dengan dudukan nyaman dan empuk saat digunakan.</p>
            <p>SKU: N/A</p>
            <p className='kategori'>Kategori: Almari Rumah</p>
            <div className="quantity-control">
              <button className='buttonKurang'>-</button>
              <input className='inputProdukDetail' type="text" value="1" readOnly />
              <button className='buttonPlus'>+</button>
              <div className='add'>
                <button className="add-to-cart">Tambah Ke Keranjang</button>
                <button className="add-to-wishlist"><img src={Suka} alt="Suka" style={{ width: '30px', height: '30px' }} /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="product-tabs">
          <ul className='Menu-Bawah'>
            <li className={activeTab === 'Deskripsi' ? 'active' : ''} onClick={() => setActiveTab('Deskripsi')}>Deskripsi</li>
            <li className={activeTab === 'Informasi Tambahan' ? 'active' : ''} onClick={() => setActiveTab('Informasi Tambahan')}>Informasi Tambahan</li>
            <li className={activeTab === 'Ulasan' ? 'active' : ''} onClick={() => setActiveTab('Ulasan')}>Ulasan (0)</li>
          </ul>
          <div className="tab-content">
            {activeTab === 'Deskripsi' && (
              <div className="tab-pane">
                <h2>Produk Unggulan Kami :</h2>
                <p>Almari Penyakat Ruangan</p>
                <p>Bean Bag Bulat kami ini terbuat dari bahan kualitas terbaik dengan memperhatikan kenyamanan pengguna. Produk Bean Bag Bulat ini memberikan dukungan yang tepat pada panggung Anda. Dapat Anda manfaatkan untuk bersantai, membaca buku, dan juga menonton film. Dengan berbagai ukuran yang tersedia sehingga Anda sesuaikan dengan ruangan.</p>
                <h3>Detail Produk & Spesifikasi :</h3>
                <ul>
                  <li>Bahan:</li>
                  <li>Bagian dalam: butiran sterofoam</li>
                  <li>Kain: parasut waterproof</li>
                  <li>Ukuran: diameter 70 cm</li>
                  <li>Berat: 3 Kg (M) || 3,5 Kg (L)</li>
                  <li>Warna: random</li>
                </ul>
                <p>GL Mabel menghadirkan berbagai pilihan produk untuk rumah dan gaya hidup Anda. 
                  Dengan menggabungkan 3 cabang offline kami di Jl. Tegal Turi, Jl. Menteri Supeno dan Jl. Wonosari Km. 13 dalam satu website, DM Mebel Online siap memenuhi segala kebutuhan Anda. DM Mebel Online juga menawarkan pengalaman belanja yang dapat disesuaikan dengan kebutuhan. Sehingga Anda 
                  dapat mengambil pesanan Anda ataupun dikirimkan ke alamat tujuan. DM Mebel – Produk Lengkap & Pengiriman Cepat.</p>
              </div>
            )}
            {activeTab === 'Informasi Tambahan' && (
              <div className="tab-pane">
                <h2>Informasi Tambahan</h2>
                <p>Berikut adalah informasi tambahan mengenai produk ini:</p>
                <ul>
                  <li>Pengiriman: Gratis untuk wilayah tertentu</li>
                  <li>Garansi: 1 tahun untuk kerusakan pabrik</li>
                  <li>Perawatan: Cuci dengan tangan, jangan gunakan pemutih</li>
                </ul>
              </div>
            )}
            {activeTab === 'Ulasan' && (
              <div className="tab-pane">
                <h2>Ulasan</h2>
                <p>Belum ada ulasan untuk produk ini. Jadilah yang pertama memberikan ulasan!</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProdukDetail;
