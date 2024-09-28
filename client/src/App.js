import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Login from "./pages/students/Login";
import Register from "./pages/students/Register";

import StudentDashboardRoutes from "./pages/students/StudentDashboardRoutes";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/studentDashbaord/*"
          element={<StudentDashboardRoutes />}
        />
      </Routes>
    </div>
  );
};

export default App;
