import React, { useState } from "react";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import "../../styles/Login.css"; // Import the CSS file
import toast from "react-hot-toast";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/v1/student/StudentLogin",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setSuccess(response.data.message);
      toast.success("Login successful!");
      navigate("/home");
      setError("");
    } catch (err) {
      setError(err.response.data.message);
      toast.error(err.response.data.message); // Toast for error
      setSuccess("");
    }
  };

  return (
    <Layout>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </div>
    </Layout>
  );
};

export default Login;
