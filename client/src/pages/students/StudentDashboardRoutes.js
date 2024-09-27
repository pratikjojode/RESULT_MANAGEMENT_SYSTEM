import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentDashboard from "./StudentDashboard";
import Profile from "./Profile"; // Profile component
import SearchStudentById from "./SearchStudentById"; // Search component
import SearchResults from "./SearchResults";
import HomePage from "../../components/Home";

const StudentDashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<StudentDashboard />}>
        <Route path="profile/:studentId" element={<Profile />} />
        {/* Updated to include studentId */}
        <Route path="search" element={<SearchStudentById />} />
        <Route path="results" element={<SearchResults />} />
        <Route path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default StudentDashboardRoutes;
