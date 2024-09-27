import React from "react";
import Navbar from "../Navbar"; // Import your Navbar component
import "../../styles/Layout.css";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className="layout-container">
        {children} {/* This is where the children components will be placed */}
      </div>
    </>
  );
};

export default Layout;
