// AdminRegister.js
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // For navigation after registration

const AdminRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/admin/register", {
        name,
        email,
        password,
      });
      if (response.data.success) {
        navigate("/admin-login"); // Redirect to login after successful registration
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error(err);
      setError("Error registering admin");
    }
  };

  return (
    <div>
      <h1>Admin Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
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
        <button type="submit">Register</button>
        <p>
          Don't have an account? <Link to="/adminlogin">Login here</Link>
        </p>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AdminRegister;
