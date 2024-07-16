import React from 'react';
import './Dashboard.css';
import Header from './Header';
import Footer from './Footer';
import banner from './Gambar/Banner.png';
import unggulan1 from './Gambar/Unggulan1.png';
import unggulan2 from './Gambar/Unggulan2.png';
import unggulan3 from './Gambar/Unggulan3.png';
import logo1 from './Gambar/Logo.png';
import logo2 from './Gambar/Logo_dashboard2.png';
import { Link } from 'react-router-dom';
const products = [
  
  {
    id: 1,
    harga: 'Rp 7,750,000.00',
    judul: 'Almari Penyeka Ruangan',
    imageUrl: unggulan1
  },
  {
    id: 1,
    harga: 'Rp 7,750,000.00',
    judul: 'Almari Penyeka Ruangan',
    imageUrl: unggulan1
  },
  {
    id: 1,
    harga: 'Rp 7,750,000.00',
    judul: 'Almari Penyeka Ruangan',
    imageUrl: unggulan1
  },
  {
    id: 1,
    harga: 'Rp 7,750,000.00',
    judul: 'Almari Penyeka Ruangan',
    imageUrl: unggulan1
  },
  {
    id: 1,
    harga: 'Rp 7,750,000.00',
    judul: 'Almari Penyeka Ruangan',
    imageUrl: unggulan1
  },
  {
    id: 1,
    harga: 'Rp 7,750,000.00',
    judul: 'Almari Penyeka Ruangan',
    imageUrl: unggulan1
  },
  {
    id: 1,
    harga: 'Rp 7,750,000.00',
    judul: 'Almari Penyeka Ruangan',
    imageUrl: unggulan1
  },
  {
    id: 1,
    harga: 'Rp 7,750,000.00',
    judul: 'Almari Penyeka Ruangan',
    imageUrl: unggulan1
  },
  {
    id: 1,
    harga: 'Rp 7,750,000.00',
    judul: 'Almari Penyeka Ruangan',
    imageUrl: unggulan1
  },
  {
    id: 1,
    harga: 'Rp 7,750,000.00',
    judul: 'Almari Penyeka Ruangan',
    imageUrl: unggulan1
  },
  {
    id: 1,
    harga: 'Rp 7,750,000.00',
    judul: 'Almari Penyeka Ruangan',
    imageUrl: unggulan1
  },
  {
    id: 1,
    harga: 'Rp 7,750,000.00',
    judul: 'Almari Penyeka Ruangan',
    imageUrl: unggulan1
  },
  

];

const ProductDashboard = ({ harga, judul, imageUrl }) => (
    <div className="product-dashboard">
      <img src={imageUrl} alt={harga} className="image-Dashboard" />
      <div className="product-info-Dashboard">
        <h4 className='h4Produk1'>{harga}</h4>
        <p className='pproduk1'>{judul}</p>
      </div>
    </div>
  );

  const HotProduk = ({ judul, harga, description, imageUrl }) => (
    <div className="hot-product-card">
      <img src={imageUrl} alt={judul} className="hot-product-image" />
      <div className="hot-product-info">
        <h4>{judul}</h4>
        <p>{harga}</p>
        <p>{description}</p>
      </div>
    </div>
  );
  
const Dashboard = () => {

  return (
    <section id="dashboar">
      <div className="Dashboard">
      <Header />
      <div>
      <div className="banner"><img src={banner} style={{ width: '100%', height: 'auto' }}/></div>
      </div>
      <main>
     
    <div className="Selamat-Dashboard">
      <h1>Selamat Datang di <img src={logo1}   style={{ width: '170px', height: '35px', margin: '0 10' }} /> </h1>
      <p className="R">Rumahnya Furniture berkualitas dan bergaransi</p>
    </div>
    <h2>Kategori produk unggulan pada <img src={logo1}   style={{ width: '170px', height: '35px', margin: '0 10' }}  /></h2>
    <div className="unggulann">
    <div className="unggulan">
      <img src={unggulan1} alt="Almari Penyeka Ruangan" />
      <img src={unggulan2} alt="Kursi Taman" />
     
    </div>
    </div>
    <div className="unggulan1">
    <img src={unggulan3} alt="Bale-Bale" />
    </div>
    <h2>Produk yang tersedia pada <img src={logo1}   style={{ width: '170px', height: '35px', margin: '0 10' }} alt="Keranjang" /></h2>
    <div className="product-Dashboard">
            {products.map(product => (
              <ProductDashboard
                key={product.id}
                harga={product.harga}
                judul={product.judul}
                imageUrl={product.imageUrl}
              />
      ))}
    </div>

    <img src={logo2}   className='logo2' />
    <div className="hot-product">
            {products.map(product => (
              <HotProduk
                key={product.id}
                judul={product.judul}
                harga={product.harga}
                description={product.description}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
  </main>

        < Footer/>
      </div>
    </section>
  );
};

export default Dashboard;
