import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DataAdminSA.css';
import logo from './Gambar/Logo.png';

const initialDataAdmin = [
  {
    no: 1,
    nama: 'Almari Penyokat Ruangan',
    password: 'RP 1234',
  },
  
];

const  AdminDataSA = () => {
  const [dataAdmin, setDataAdmin] = useState(initialDataAdmin);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingAdmin, setEditingAdmin] = useState({ no: '', nama: '', password: '' });
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    
    navigate('/'); 
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditingAdmin(dataAdmin[index]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingAdmin({ ...editingAdmin, [name]: value });
  };

  const handleSave = () => {
    const newDataAdmin = [...dataAdmin];
    newDataAdmin[editingIndex] = editingAdmin;
    setDataAdmin(newDataAdmin);
    setEditingIndex(null);
  };

  const handleDelete = (index) => {
    const newDataAdmin = dataAdmin.filter((_, i) => i !== index);
    setDataAdmin(newDataAdmin);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <img src={logo} alt="GL Mebel" className="logo" />
        </div>
        <div className="header-right">
          <div className="user-info">
            <span>Halo, Super Admin</span>
          </div>
          <button className="logout-button" onClick={handleLogout}>Log Out</button>
        </div>
      </header>
      <div className="dashboard">
      <aside className="sidebar card">
          <ul>
            <li><Link to="/DashboardSA">Input Furniture</Link></li>
            <li><Link to="/FurnitureListSA">Data Furniture</Link></li>
            <li><Link to="/OrderTableSA">Orderan</Link></li>
            <li><Link to="/InputAdminSA">Input Admin</Link></li>
            <li><Link to="/DataAdminSA">Data Admin</Link></li>
            <li><Link to="/LaporanPenjualanSA">Laporan Penjualan</Link></li>
          </ul>
        </aside>
        <div className="data-table">
          <button className="back-button" onClick={handleBackClick}>Kembali</button>
          <h2>Admin Data</h2>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Admin</th>
                <th>Password Admin</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataAdmin && dataAdmin.length > 0 ? (
                dataAdmin.map((admin, index) => (
                  <tr key={index}>
                    <td>{admin.no}</td>
                    <td>
                      {editingIndex === index ? (
                        <input
                          type="text"
                          name="nama"
                          value={editingAdmin.nama}
                          onChange={handleInputChange}
                        />
                      ) : (
                        admin.nama
                      )}
                    </td>
                    <td>
                      {editingIndex === index ? (
                        <input
                          type="text"
                          name="password"
                          value={editingAdmin.password}
                          onChange={handleInputChange}
                        />
                      ) : (
                        admin.password
                      )}
                    </td>
                    <td>
                      {editingIndex === index ? (
                        <>
                          <button className="save-button" onClick={handleSave}>Save</button>
                          <button className="cancel-button" onClick={() => setEditingIndex(null)}>Cancel</button>
                        </>
                      ) : (
                        <>
                          <button className="edit-button" onClick={() => handleEdit(index)}>Edit</button>
                          <button className="delete-button" onClick={() => handleDelete(index)}>Hapus</button>
                        </>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No admin data available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminDataSA;