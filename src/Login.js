import React, { useState } from "react";
import "./Login.css";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { login } from "./api/apiService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const credentials = { username, password };
      const result = await login(credentials);
      console.log("Login successful:", result);
      // Lakukan sesuatu setelah login berhasil, misalnya redirect ke halaman dashboard
      if (result.role === "superadmin") {
        navigate("/DashboardSA");
      } else if (result.role === "admin") {
        navigate("/DashboardA");
      } else {
        navigate("/"); // Redirect ke halaman dashboard atau halaman lainnya
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Header />
      <section className="login-pelanggan">
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <div className="login-box">
          <h2>Masuk</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">
                Nama pengguna atau alamat email
                <span className="bintang">*</span>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            <div className="remember-forgot">
              <label>
                <input type="checkbox" name="remember" /> Ingat saya
              </label>
              <a href="/ForgotPassword">Forgot Password?</a>
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <button type="submit" className="masuk">
              MASUK
            </button>
          </form>
          <div className="register-link">
            <a href="/register">Register Now!</a>
          </div>
          <div className="register-link">
            <a href="/DashboardSA">Login Super Admin</a>
          </div>
          <div className="register-link">
            <a href="/DashboardA">Login Admin</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
