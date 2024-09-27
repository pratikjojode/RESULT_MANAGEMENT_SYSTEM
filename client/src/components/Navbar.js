import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const NewNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="new-navbar">
      <div className="new-container">
        {/* Brand Logo */}
        <Link className="new-navbar-brand" to="/">
          Result Management System
        </Link>
        {/* Hamburger Toggle */}
        <button
          className="new-navbar-toggler"
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`new-navbar-toggler-icon ${isOpen ? "active" : ""}`}
          ></span>
        </button>
        {/* Nav Links */}
        <div className={`new-navbar-nav ${isOpen ? "show" : ""}`}>
          <Link className="new-nav-link" to="/home">
            Home
          </Link>
          <Link className="new-nav-link" to="/about">
            About
          </Link>
          <Link className="new-nav-link" to="/contact">
            Contact
          </Link>
          <Link className="new-nav-link" to="/login">
            Login
          </Link>
          <Link className="new-nav-link" to="/register">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NewNavbar;
