import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../styles/ViewAllStudents.css"; // Importing the CSS file for styling

const ViewAllStudents = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("/api/v1/student/getAllStudents");
        if (response.data.success) {
          setStudents(response.data.student);
        } else {
          setError("Failed to fetch students");
        }
      } catch (error) {
        console.log(error);
        setError("Error fetching students");
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="students-container">
      <h1 className="title">Students</h1>

      {error && <p className="error">{error}</p>}

      <div className="students-card-container">
        {students.length > 0 ? (
          students.map((student) => (
            <div className="student-card" key={student._id}>
              <h2 className="student-name">{student.name}</h2>
              <p className="student-details">
                <strong>Email:</strong> {student.email}
              </p>
              <p className="student-details">
                <strong>Role:</strong> {student.role}
              </p>
              <p className="student-details">
                <strong>Student ID:</strong> {student.studentId}
              </p>
            </div>
          ))
        ) : (
          <p className="no-students">No students available</p>
        )}
      </div>
    </div>
  );
};

export default ViewAllStudents;
