import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import ViewAllStudents from "./ViewAllStudents";
import ShowResults from "./ShowResults";
import UploadMarks from "./UploadMarks";
import CreateResultForm from "./CreateResultForm";
import AdminLogin from "../../components/AdminLogin";
import AdminRegister from "../../components/AdminRegister";

const AdminDashboardRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/view-students" element={<ViewAllStudents />} />
        <Route path="/createResult/:studentId" element={<CreateResultForm />} />
        <Route path="/show-results" element={<ShowResults />} />
        <Route path="/upload-marks" element={<UploadMarks />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminRegister" element={<AdminRegister />} />
      </Routes>
    </div>
  );
};

export default AdminDashboardRoutes;
