import React from 'react';
import pembayaran1 from './Gambar/Bank BCA.png';
import pembayaran2 from './Gambar/Bank CimbNiaga.png';
import pembayaran3 from './Gambar/Bank BNI.png';
import pembayaran4 from './Gambar/Bank Mandiri.png';
import pembayaran5 from './Gambar/Bank PermataBank.png';
import pembayaran6 from './Gambar/Bank BTN.png';
import StyleFooter from './StyleFooter.css'
const Footer = () => (
    <footer>
    <div className="footer-section">
      <h4>Tentang Kami</h4>
      <p>GL Mebel merupakan platform situs belanja furniture online dari Jepara yang bertujuan untuk memenuhi kebutuhan pelanggan terhadap furniture idaman yang dibutuhkan seluruh masyarakat Indonesia.</p>
    </div>
    <div className="footer-section">
      <h4>Hubungi Kami</h4>
      <p>Jln. Ahmad Yani Desa Ploso, Yogyakarta</p>
      <p>Whatsapp Us : +62 188 888 6999</p>
      <p>Email Us : DIMEBEL@gmail.com</p>
    </div>
    <div className="footer-section-pembayaran">
      <h4>Metode Pembayaran</h4>
     <img src={pembayaran1}style={{ width: '100px', height: '40px' }}  className='logo_pembayaran' /> <img src={pembayaran2}style={{ width: '100px', height: '40px' }}  className='logo_pembayaran' />
     
    </div>
    <div className="footer-section">
      <h4>Layanan Pelanggan</h4>
      <p>Hubungi Kami, Contact, Cara Order, Syarat Dan Ketentuan</p>
    </div>
  </footer>
);

export default Footer;
