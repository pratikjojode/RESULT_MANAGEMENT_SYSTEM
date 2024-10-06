// AdminLogin.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; // Import Link for navigation

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/admin/login", {
        email,
        password,
      });
      if (response.data.success) {
        navigate("/adminDashboard");
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error(err);
      setError("Error logging in");
    }
  };

  return (
    <div>
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>{" "}
        {/* Correct button implementation */}
      </form>
      {error && <p className="error">{error}</p>}
      <p>
        Don't have an account?
        <Link to="/adminDashboard/adminRegister">Register here</Link>
      </p>
    </div>
  );
};

export default AdminLogin;
