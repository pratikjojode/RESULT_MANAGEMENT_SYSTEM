import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentDashboard from "./StudentDashboard";
import Profile from "./Profile"; // Profile component
import SearchStudentById from "./SearchStudentById"; // Search component
import SearchResults from "./SearchResults";

const StudentDashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<StudentDashboard />}>
        <Route path="profile/:studentId" element={<Profile />} />{" "}
        {/* Updated to include studentId */}
        <Route path="search" element={<SearchStudentById />} />
        <Route path="results" element={<SearchResults />} />
      </Route>
    </Routes>
  );
};

export default StudentDashboardRoutes;
