import React from 'react';
import './CaraOrder.css';
import Header from './Header';
import Footer from './Footer';
import logo1 from './Gambar/Logo.png';
import { Helmet } from 'react-helmet';

const CaraOrder = () => {
  return (
    <section id="caraorder">
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="Halaman-caraorder-pelanggan">
        <Header />
        <main className='CaraOrder'>
          <h2 className='cara-pesan'>
            Bagaimana Cara Pemesanan di
            <img src={logo1} style={{ width: '170px', height: '35px', margin: '0 10px' }} className='logo1' alt="GL Mebel" />
          </h2>
          <ul>
            <li>Silahkan tentukan produk yang Anda ingin pesan, kemudian informasikan pesanan Anda dengan menghubungi Customer Service kami lewat WA di +628122224393</li>
            <li>Setelah itu kami akan memberikan informasi terkait harga dan ketersediaan barang yang Anda pesan</li>
            <li>Selanjutnya kami akan informasikan prosedur pemesanan, dari total harga dan biaya kirim kepada Anda. Jika sudah ada kesepakatan harga, maka kami minta deposit atau uang muka 50% sebagai tanda jadi. Dana bisa ditransfer ke salah satu rekening kami yang telah tersedia di jendela utama website kami, kekurangannya akan kami minta setelah barang sudah jadi dan siap dikirim.</li>
            <li>Proses pengerjaan maksimum 30 hari atau berdasarkan tingkat kesulitan produk terhitung sejak DP (down payment) kami terima</li>
            <li>Setiap proses produksi akan selalu kami laporkan kepada Anda dengan mengirim foto melalui email, WA atau Blackberry Messenger, sehingga jika ada kesalahan atau tidak cocok dengan yang Anda minta, kami bisa memperbaikinya.</li>
            <li>Pembatalan pesanan dapat dilakukan jika proses produksi barang yang dipesan belum dimulai dan DP dikembalikan sepenuhnya tanpa adanya potongan biaya apapun.</li>
          </ul>
          <h2 className='cara-pesan'>
          Proses Pengiriman Barang di<img src={logo1} style={{ width: '170px', height: '35px', margin: '0 10px' }} className='logo1' alt="GL Mebel" />
          </h2>
          <ul>
            <li>Kami menggunakan jasa pengiriman EXPEDISI ARMADA TRUCK LOKAL sehingga biaya pengiriman lebih murah, Karena semua biaya pengiriman 100% dibebankan kepada pembeli.</li>
            <li>Anda tidak usah ragu untuk memesan produk furniture di Perusahaan kami, Jika barang yang anda pesan sudah siap dikirim dan transaksi pembayaran sudah clear maka barang yang Anda pesan akan segera kami kirim. Kami akan memberikan kemudahan dalam pengiriman produk yang Anda pesan, Karena kami telah bekerjasama dengan perusahaan expedisi yang terpercaya di Jepara jadi anda tidak perlu khawatir untuk keamanan barang yang Anda pesan karena pesanan furniture Anda akan diantar sampai tempat tujuan dengan aman dan selamat.</li>
            <li>Berikut Adalah Perusahaan Cargo Lokal Yang Terpercaya Antara Lain :</li>
            <ol className='perusahaan-cargo'>
                <li>Pepeje Expedisi : Jepara – Jakarta (DKI, Jabodetabek) * Jepara – Sumatra (Seluruh Pulau sumatra)</li>
                <li>Bali Indo cargo : Jepara – Bali (Seluruh Pulau Bali) * Jepara – Mataram, Jepara – Lombok (wilayah ini hanya dilayani jika pengiriman 1 truk penuh/ booking 1 truk)</li>
                <li>Hiba Cargo : Jepara – Sumatra ( Seluruh Pulau Sumatra )</li>
                <li>Prima Expres : Jepara – Surabaya (sekitaran wilayah surabaya / jawa timur)</li>
                <li>Atox Trans : Jepara – Bandung (wilayang bandung kota / jawa barat)</li>
                <li>Semarang, Solo & Jogja : menggunakan Pick up dengan biaya 300.000 – 600.000/ sekali jalan</li>
                <li>Apabila pemesanan dalam jumlah banyak ( 50 jt./ lebih ) bisa menggunakan peti kemas / container via emkl , Samas, Kamasindo, Modatma dll. Langsung dari Jepara ke Kalimantan atau daerah lainnya.</li>
            
            </ol>
          </ul>
          
          <h2 className='cara-pesan'>
          Bagaimana Jika Barang Yang Kami Terima Rusak / Lecet?  
          </h2>
          <ul>
            <li>Klaim dapat diterima selama sopir pengantar barang masih dilokasi terima barang, karena akan sepenuhnya menjadi tanggung jawab oleh Cargo atau JASA EXPEDISI.</li>
            <li>Jika barang ada yang lecet ringan, maka kita akan kirim bahan warna finishing yang sama lewat paket sehingga barang yang lecet bisa dikuas/dicolok dengan warna yang kita kirimkan.</li>
            <li>Jika barang yang diterima rusak berat, kita SIAP GANTI dengan yang baru, setelah barang dikirim kembali atau diretur.</li>
          </ul>
          <h2 className='cara-pesan'>
          Bagaimana Mengetahui Posisi Kiriman Barang di 
            <img src={logo1} style={{ width: '170px', height: '35px', margin: '0 10px' }} className='logo1' alt="GL Mebel" />
          </h2>
          <ul>
          <li>Kami akan menginformasikan nomor kontak atau HP supir yang membawa barang saudara sehingga dengan mudah mengetahui posisi kiriman saudara.</li>
          </ul>
          <h2 className='cara-pesan'>
          Pembayaran 
          </h2>
          <ul>
            <li>Pembayaran Dilakukan Dengan Menggunakan Transfer Bank Melalui Rekening Bank kami:</li>
            <ol className='bank-pembayaran'>
                <li>BNI</li>
                <li>BCA</li>
                <li>MANDIRI</li>
            </ol>
            <li>Semua Bank diatas, atas nama <img src={logo1} style={{ width: '100px', height: '20px', margin: '0 10px' }} className='logo1' alt="GL Mebel" /></li>
          </ul>
          </main>
       
        <Footer />
      </div>
    </section>
  );
};

export default CaraOrder;
