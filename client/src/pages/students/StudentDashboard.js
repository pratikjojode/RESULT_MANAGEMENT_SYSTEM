import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../styles/StudentDashboard.css"; // Import your CSS file
import DashbordInfo from "../../components/DashbordInfo"; // Assuming this is correctly imported

const StudentDashboard = ({ studentId }) => {
  const [activeTab, setActiveTab] = useState("profile"); // Default tab

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Student Dashboard</h2>
        <ul>
          <li>
            <Link
              to={`profile/${studentId}`}
              className={activeTab === "profile" ? "active" : ""}
              onClick={() => setActiveTab("profile")}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="search"
              className={activeTab === "search" ? "active" : ""}
              onClick={() => setActiveTab("search")}
            >
              Search Student by ID
            </Link>
          </li>
          <li>
            <Link
              to="results"
              className={activeTab === "results" ? "active" : ""}
              onClick={() => setActiveTab("results")}
            >
              View Results
            </Link>
          </li>
          <li className="student-id">
            <strong>Current Student ID:</strong> You will receive your student
            ID from your authority: <em>EX: STUXXXXXXXXXX</em>
          </li>

          {/* Properly add the dashboard link here */}
          <li>
            <Link
              to="dashbaordInfo" // Add the correct route if needed
              className={activeTab === "dashboard" ? "active" : ""}
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/home"
              className={activeTab === "home" ? "active" : ""}
              onClick={() => setActiveTab("home")}
            >
              Home
            </Link>
          </li>
        </ul>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default StudentDashboard;
