import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './FurnitureListSA.css';
import logo from './Gambar/Logo.png';
import almariImage from './Gambar/Unggulan1.png'; 

const initialFurnitureData = [
    {
        name: 'Almari Penyokat Ruangan',
        price: 400000,
        description: 'Almari Penyokat Ruangan kami ini terbuat dari bahan kualitas terbaik dengan memperhatikan kenyamanan pengguna. Produk Almari Penyokat Ruangan ini memberikan dukungan yang tepat pada punggung Anda. Dapat Anda manfaatkan untuk bersantai, membaca buku, dan juga menonton film. Dengan berbagai ukuran yang tersedia sehingga Anda sesuaikan dengan ruangan.',
        image: almariImage,
    },
    
];

const FurnitureListA = () => {
    const [furnitureData, setFurnitureData] = useState(initialFurnitureData); 
    const [editingIndex, setEditingIndex] = useState(null); 
    const [editingItem, setEditingItem] = useState({ name: '', price: '', description: '', image: '' }); 
    const navigate = useNavigate(); 
    const handleBackClick = () => {
        navigate('/');
    };

    const handleLogout = (event) => {
        event.preventDefault();   
        navigate('/'); 
    };

    const handleDelete = (index) => {
        const newFurnitureData = furnitureData.filter((item, i) => i !== index);
        setFurnitureData(newFurnitureData);
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
        setEditingItem(furnitureData[index]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditingItem({ ...editingItem, [name]: value });
    };

    const handleSave = () => {
        const newFurnitureData = [...furnitureData];
        newFurnitureData[editingIndex] = editingItem;
        setFurnitureData(newFurnitureData);
        setEditingIndex(null); 
    };

    return (
        <>
            <header className="header">
                <div className="header-left">
                    <img src={logo} alt="GL Mebel" className="logo" />
                </div>
                <div className="header-right">
                    <div className="user-info">
                        <span>Halo, Admin</span>
                    </div>
                    <button className="logout-button" onClick={handleLogout}>Log Out</button>
                </div>
            </header>
            <div className="dashboard">
            <aside className="sidebar card">
          <ul>
            <li><Link to="/DashboardA">Input Furniture</Link></li>
            <li><Link to="/FurnitureListA">Data Furniture</Link></li>
            <li><Link to="/OrderTableA">Orderan</Link></li>
          </ul>
        </aside>
                <div className="furniture-list">
                    <h2>Data Furniture Admin</h2>
                    <div className="furniture-table">
                        {furnitureData.map((item, index) => (
                            <div key={index} className="furniture-item">
                                <div className="furniture-photo">
                                <img src={item.image} alt={item.name} style={{ width: '100px', height: '130px' }} />

                                </div>
                                <div className="furniture-info">
                                    {editingIndex === index ? (
                                        <>
                                            <input 
                                                type="text" 
                                                name="name" 
                                                value={editingItem.name} 
                                                onChange={handleInputChange} 
                                            />
                                            <input 
                                                type="number" 
                                                name="price" 
                                                value={editingItem.price} 
                                                onChange={handleInputChange} 
                                            />
                                            <textarea 
                                                name="description" 
                                                value={editingItem.description} 
                                                onChange={handleInputChange} 
                                            />
                                            <div className="furniture-actions">
                                                <button onClick={handleSave}>Save</button>
                                                <button onClick={() => setEditingIndex(null)}>Cancel</button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <h3>{item.name}</h3>
                                            <p>{item.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                                            <p>{item.description}</p>
                                            <div className="furniture-actions">
                                                <button onClick={() => handleEdit(index)}>Edit</button>
                                                <button onClick={() => handleDelete(index)}>Hapus</button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="back-button" onClick={handleBackClick}>
                        Kembali
                    </button>
                </div>
            </div>
        </>
    );
}

export default FurnitureListA;