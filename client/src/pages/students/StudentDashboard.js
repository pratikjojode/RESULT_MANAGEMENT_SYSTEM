import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../styles/StudentDashboard.css"; // Import your CSS file

const StudentDashboard = ({ studentId }) => {
  // Accept studentId as a prop
  const [activeTab, setActiveTab] = useState("profile"); // Default tab

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Student Dashboard</h2>
        <ul>
          <li>
            <Link
              to={`profile/${studentId}`}
              onClick={() => setActiveTab("profile")}
            >
              {/* Updated to include studentId */}
              Profile
            </Link>
          </li>
          <li>
            <Link to="search" onClick={() => setActiveTab("search")}>
              Search Student by ID
            </Link>
          </li>
          <li>
            <Link to="results" onClick={() => setActiveTab("results")}>
              View Results
            </Link>
          </li>
        </ul>
      </aside>
      <main className="main-content">
        <h3>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} View</h3>
        <Outlet /> {/* This will render the matched child route */}
      </main>
    </div>
  );
};

export default StudentDashboard;
