import React, { useState } from "react";
import "./Register.css";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { register } from "./api/apiService"; // Import fungsi register dari apiService
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userDetails = {
        name: `${firstName} ${lastName}`,
        email,
        password,
        confPassword: password,
      };
      const result = await register(userDetails);
      console.log("Registration successful:", result);
      navigate("/login"); // Redirect ke halaman login setelah berhasil registrasi
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Header />
      <section className="Register-pelanggan">
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <div className="Register-box">
          <h2>Daftar</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="nama-depan">
                Nama Depan<span className="bintang">*</span>
              </label>
              <input
                type="text"
                id="nama-depan"
                name="nama-depan"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="nama-belakang">
                Nama Belakang<span className="bintang">*</span>
              </label>
              <input
                type="text"
                id="nama-belakang"
                name="nama-belakang"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="alamat-email">
                Alamat Email<span className="bintang">*</span>
              </label>
              <input
                type="text"
                id="alamat-email"
                name="alamat-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">
                Kata Sandi<span className="bintang">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="DataPribadi">
              <label>
                <p>
                  Data Pribadi Anda akan digunakan untuk menunjang pengalaman
                  anda di seluruh situs web ini, untuk mengelola akses ke akun
                  anda, dan untuk tujuan lain yang di jelaskan dalam{" "}
                  <span className="bintang">kebiijakan privasi</span> kami.
                </p>
              </label>
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <button type="submit" className="register">
              REGISTER
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
