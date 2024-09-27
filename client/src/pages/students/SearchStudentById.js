import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../../styles/searchId.css";
const SearchStudentById = () => {
  const [studentId, setStudentId] = useState(""); // State to hold student ID
  const navigate = useNavigate(); // Hook to navigate

  const handleSearch = () => {
    if (studentId) {
      // Navigate to the profile route with the student ID
      navigate(`/studentDashbaord/profile/${studentId}`);
    } else {
      alert("Please enter a student ID");
    }
  };

  return (
    <div className="serach-id">
      <h2>Search Student by ID</h2>
      <input
        type="text"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)} // Update state on input change
        placeholder="Enter Student ID"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchStudentById;
