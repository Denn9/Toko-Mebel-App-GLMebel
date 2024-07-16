import React from 'react';
import './Produk.css';
import Header from './Header';
import Footer from './Footer';
import unggulan1 from './Gambar/Unggulan1.png';
import logo1 from './Gambar/Logo.png';
import { Link } from 'react-router-dom';
const produkkk = [
  
  {
    id: 1,
    judul: 'Almari Penyeka Ruangan(19)',
    imageUrl: unggulan1
  },
  {
    id: 1,
    judul: 'Almari Penyeka Ruangan(19)',
    imageUrl: unggulan1
  },
  {
    id: 1,
    judul: 'Almari Penyeka Ruangan(19)',
    imageUrl: unggulan1
  },
  {
    id: 1,
    judul: 'Almari Penyeka Ruangan(19)',
    imageUrl: unggulan1
  },
  {
    id: 1,
    judul: 'Almari Penyeka Ruangan(19)',
    imageUrl: unggulan1
  },
  {
    id: 1,
    judul: 'Almari Penyeka Ruangan(19)',
    imageUrl: unggulan1
  },
  {
    id: 1,
    judul: 'Almari Penyeka Ruangan(19)',
    imageUrl: unggulan1
  },
  {
    id: 1,
    judul: 'Almari Penyeka Ruangan(19)',
    imageUrl: unggulan1
  },
  {
    id: 1,
    judul: 'Almari Penyeka Ruangan(19)',
    imageUrl: unggulan1
  },
  {
    id: 1,
    judul: 'Almari Penyeka Ruangan(19)',
    imageUrl: unggulan1
  },
  {
    id: 1,
    judul: 'Almari Penyeka Ruangan(19)',
    imageUrl: unggulan1
  },
  {
    id: 1,
    judul: 'Almari Penyeka Ruangan(19)',
    imageUrl: unggulan1
  },
  

];

const Produkkk = ({ harga, judul, imageUrl }) => (
    <div className="product-dashboard">
      <img src={imageUrl} alt={harga} className="image-Dashboard" />
      <div className="product-info-Pelanggan">
        <p className='pproduk1'>{judul}</p>
      </div>
    </div>
  );


  
const Produk = () => {
  return (
    <section id="Produk">
      <div className="Halaman-produk-pelanggan">
      <Header />
<main>
    <h2 className='h2Produk'>Produk <img src={logo1}   style={{ width: '170px', height: '35px', margin: '0 10' }} alt="Keranjang" /></h2>
    <div className="Halaman-Produk-pelanggan">
            {produkkk.map(produkkk => (
              <Produkkk
                key={produkkk.id}
                judul={produkkk.judul}
                imageUrl={produkkk.imageUrl}
              />
      ))}
    </div>
  </main>

        < Footer/>
      </div>
    </section>
  );
};

export default Produk;
