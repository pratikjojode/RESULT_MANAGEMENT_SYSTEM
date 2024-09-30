import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import ViewAllStudents from "./ViewAllStudents";
import ShowResults from "./ShowResults";
import UploadMarks from "./UploadMarks";
import CreateResultForm from "./CreateResultForm";

const AdminDashboardRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />

        <Route path="/view-students" element={<ViewAllStudents />} />
        <Route path="/createResult/:studentId" element={<CreateResultForm />} />
        <Route path="/show-results" element={<ShowResults />} />
        <Route path="/upload-marks" element={<UploadMarks />} />
      </Routes>
    </div>
  );
};

export default AdminDashboardRoutes;
