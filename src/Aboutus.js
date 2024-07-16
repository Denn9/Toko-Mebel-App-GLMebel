import React from 'react';
import './Aboutus.css';
import Header from './Header';
import Footer from './Footer';
import unggulan1 from './Gambar/Unggulan1.png';
import logo1 from './Gambar/Logo.png';
import { Link } from 'react-router-dom';

const Aboutus = () => {
  return (
    <section id="aboutus">
      <div className="Halaman-aboutus-pelanggan">
        <Header />
        <main>
          <div className="logo-container">
            
          </div>
          <h2 className='title'>Selamat Datang di GL Mebel<img src={logo1} style={{ width: '170px', height: '35px', margin: '0 10' }} className='logo1' alt="GL Mebel" /></h2>
          <h3>Sebuah Toko Furniture Online Aman & Terpercaya dengan ribuan Customer di berbagai Kota di seluruh Indonesia.</h3>
          <p className='p-about-1'>Terima kasih telah mengunjungi GL MEBEL, di mana Anda dapat menemukan banyak furniture rumah berkualitas tinggi yang disediakan dengan harga terjangkau. Rumah Mebel adalah platform furniture e-commerce perabotan rumah.</p>
          <p>Rumah Mebel adalah perusahaan furniture brand yang berkantor pusat di Jepara, Jawa Tengah, Indonesia. Perusahaan ini didirikan pada tahun 2014 dan telah menjadi salah satu pemain terkemuka di industri furniture di Indonesia. Rumah Mebel memproduksi berbagai macam produk furniture, seperti kursi, meja, lemari, sofa, dan lain sebagainya.</p>
          <p>Perusahaan ini memiliki visi untuk menjadi salah satu produsen furniture terkemuka di Indonesia dengan memberikan nilai tambah yang terbaik bagi pelanggan melalui produk-produk berkualitas tinggi dan layanan yang profesional. Rumah Mebel juga memiliki misi untuk terus mengembangkan kreativitas dan inovasi dalam menciptakan produk furniture yang elegan, fungsional, dan nyaman bagi para pelanggannya.</p>
          <p>Rumah Mebel memiliki tim desain yang terampil dan berpengalaman dalam menciptakan produk furniture yang unik dan menarik. Tim desain Rumah Mebel selalu mengikuti tren dan perkembangan desain furniture terbaru, sehingga produk-produk yang dihasilkan selalu terlihat segar dan up to date. Selain itu, tim desain Rumah Mebel juga selalu mempertimbangkan kenyamanan dan ergonomi dalam menciptakan produk furniture, sehingga produk-produknya tidak hanya terlihat indah tetapi juga nyaman digunakan.</p>
          <p>Perusahaan ini juga selalu memperhatikan kualitas bahan-bahan yang digunakan untuk membuat produk furniture. Rumah Mebel hanya menggunakan bahan-bahan berkualitas tinggi, seperti kayu solid, kulit asli, kain berkualitas, dan lain sebagainya. Selain itu, perusahaan ini juga memiliki standar kualitas yang ketat dalam memilih bahan-bahan, sehingga produk yang dihasilkan memiliki kualitas dan tahan lama.</p>
          <p>Rumah Mebel juga memiliki pabrik produksi yang modern dan dilengkapi dengan teknologi canggih. Pabrik produksi ini dilengkapi dengan mesin-mesin produksi yang mutakhir sehingga proses produksi menjadi lebih efisien dan cepat. Selain itu, perusahaan ini juga memiliki sistem manajemen produksi yang baik sehingga produk-produk yang dihasilkan selalu tepat waktu dan berkualitas tinggi. Rumah Mebel juga memiliki pelayanan purna jual yang baik. Perusahaan ini memberikan garansi pada setiap produk furniture yang dijual, sehingga para pelanggannya merasa lebih aman dan nyaman dalam membeli produk furniture dari Rumah Mebel. Selain itu, jika terdapat kerusakan pada produk yang dibeli, perusahaan ini juga memberikan layanan perbaikan yang cepat dan efektif.</p>
          <p>Dalam hal inovasi, Rumah Mebel selalu berusaha untuk menciptakan produk furniture yang unik dan menarik. Perusahaan ini selalu mengikuti tren dan perkembangan desain furniture terbaru sehingga produk-produk yang dihasilkan selalu terlihat segar dan up to date. Selain itu, perusahaan ini juga selalu mempertimbangkan kenyamanan dan ergonomi dalam menciptakan produk furniture, sehingga produk-produknya tidak hanya terlihat indah tetapi juga nyaman digunakan.</p>
        </main>
        <Footer/>
      </div>
    </section>
  );
};

export default Aboutus;
