import React from 'react';
import ProductCard from './ProductCart';

const products = [
  {
    id: 1,
    title: 'Almari Penyeka Ruangan',
    price: 'Rp 7,750,000.00',
    description: 'Desain modern akan membuat tampilan ruangan semakin menarik. Bean Bag Bulat ini memiliki bahan yang berkualitas dengan dudukan nyaman dan empuk saat digunakan.',
    imageUrl: '/path/to/image1.jpg' 
  },

];

const Main = () => (
  <main>
    <div className="welcome-section">
      <h1>Selamat Datang di GL MEBEL</h1>
      <p>Rumahnya Furniture berkualitas dan bergaransi</p>
    </div>
    <h2>Kategori produk unggulan pada GL MEBEL</h2>
    <div className="featured-products">
      <img src="/path/to/image1.jpg" alt="Almari Penyeka Ruangan" />
      <img src="/path/to/image2.jpg" alt="Kursi Taman" />
      <img src="/path/to/image3.jpg" alt="Bale-Bale" />
    </div>
    <h2>Produk yang tersedia pada GL MEBEL</h2>
    <div className="product-grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  </main>
);

export default Main;
