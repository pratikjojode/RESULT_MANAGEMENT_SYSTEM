import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../styles/StudentDashboard.css";

const StudentDashboard = ({ studentId }) => {
  const [activeTab, setActiveTab] = useState("profile");

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

          <li>
            <Link
              to="dashbaordInfo"
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
