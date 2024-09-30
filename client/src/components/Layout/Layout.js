import React from "react";
import Navbar from "../Navbar"; // Import your Navbar component
import "../../styles/Layout.css";
import Footer from "../Fotter";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className="layout-container">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
