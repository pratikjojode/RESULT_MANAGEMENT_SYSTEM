import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom"; // Import Link and Outlet for routing
import "../../styles/AdminDashboard.css"; // Import your CSS file for admin dashboard styling
import ViewAllStudents from "./ViewAllStudents";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("viewStudents"); // Default active tab

  return (
    <div className="dashboard">
      <aside className="admin-sidebar">
        <h2 className="title">Admin Dashboard</h2>
        <ul>
          <li className="li">
            <Link
              to="view-students" // Route to view all students
              className={activeTab === "viewStudents" ? "active" : ""}
              onClick={() => setActiveTab("viewStudents")}
            >
              View All Students
            </Link>
          </li>
          <li>
            <Link
              to="show-results" // Route to show results
              className={activeTab === "showResults" ? "active" : ""}
              onClick={() => setActiveTab("showResults")}
            >
              Show Results
            </Link>
          </li>
          <li>
            <Link
              to="upload-marks"
              className={activeTab === "uploadMarks" ? "active" : ""}
              onClick={() => setActiveTab("uploadMarks")}
            >
              Upload Marks
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
          <li>
            <Link
              to="/createResult"
              className={activeTab === "home" ? "active" : ""}
              onClick={() => setActiveTab("createResult")}
            >
              Create result
            </Link>
          </li>
        </ul>
      </aside>
      <main className="main-content">
        <ViewAllStudents />
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
