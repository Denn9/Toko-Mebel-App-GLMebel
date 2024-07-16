import { Link } from 'react-router-dom';
import unggulan1 from './Gambar/Unggulan1.png';
import React from 'react';
import './ekatalog.css';
import Header from './Header';
import Footer from './Footer';
const products = [
  {
    id: 1,
    title: 'Almari Penyeka Ruangan',
    description: 'Desain modern akan membuat tampilan ruangan semakin menarik. Bean Bag Bulat ini memiliki bahan yang berkualitas dengan dudukan nyaman dan empuk saat digunakan.',
    imageUrl: unggulan1
  },
  {
    id: 1,
    title: 'Almari Penyeka Ruangan',
    description: 'Desain modern akan membuat tampilan ruangan semakin menarik. Bean Bag Bulat ini memiliki bahan yang berkualitas dengan dudukan nyaman dan empuk saat digunakan.',
    imageUrl: unggulan1
  },
  {
    id: 1,
    title: 'Almari Penyeka Ruangan',
    description: 'Desain modern akan membuat tampilan ruangan semakin menarik. Bean Bag Bulat ini memiliki bahan yang berkualitas dengan dudukan nyaman dan empuk saat digunakan.',
    imageUrl: unggulan1
  },
  {
    id: 1,
    title: 'Almari Penyeka Ruangan',
    description: 'Desain modern akan membuat tampilan ruangan semakin menarik. Bean Bag Bulat ini memiliki bahan yang berkualitas dengan dudukan nyaman dan empuk saat digunakan.',
    imageUrl: unggulan1
  },
  {
    id: 1,
    title: 'Almari Penyeka Ruangan',
    description: 'Desain modern akan membuat tampilan ruangan semakin menarik. Bean Bag Bulat ini memiliki bahan yang berkualitas dengan dudukan nyaman dan empuk saat digunakan.',
    imageUrl: unggulan1
  },
  {
    id: 1,
    title: 'Almari Penyeka Ruangan',
    description: 'Desain modern akan membuat tampilan ruangan semakin menarik. Bean Bag Bulat ini memiliki bahan yang berkualitas dengan dudukan nyaman dan empuk saat digunakan.',
    imageUrl: unggulan1
  },
  {
    id: 1,
    title: 'Almari Penyeka Ruangan',
    description: 'Desain modern akan membuat tampilan ruangan semakin menarik. Bean Bag Bulat ini memiliki bahan yang berkualitas dengan dudukan nyaman dan empuk saat digunakan.',
    imageUrl: unggulan1
  },
  {
    id: 1,
    title: 'Almari Penyeka Ruangan',
    description: 'Desain modern akan membuat tampilan ruangan semakin menarik. Bean Bag Bulat ini memiliki bahan yang berkualitas dengan dudukan nyaman dan empuk saat digunakan.',
    imageUrl: unggulan1
  },
  
];

const ProductCard = ({ title, description, imageUrl }) => (
  <div className="product-card">
    <img src={imageUrl} alt={title} className="product-image" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Ekatalog = () => {
  return (
    <section id="ekatalog">
      <div className="App">
      < Header/>

        <main>
          <h1>E-katalog GL Mebel</h1>
          <div className="product-grid">
            {products.map(product => (
              <ProductCard
                key={product.id}
                title={product.title}
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

export default Ekatalog;
