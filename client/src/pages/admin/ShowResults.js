import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/ShowAllResults.css";

const ShowAllResults = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(
          "/api/v1/student/getAllStudentResults"
        );
        if (response.data.success) {
          setStudents(response.data.students);
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching student results");
      }
    };

    fetchResults();
  }, []);

  return (
    <div className="results-container">
      <h1>All Student Results</h1>
      {error && <p className="error">{error}</p>}
      <div className="results-list">
        {students.length === 0 ? (
          <p>No results found.</p>
        ) : (
          students.map((student) => (
            <div key={student.studentId} className="result-card">
              <h2>Name: {student.name}</h2>
              <p>Student ID: {student.studentId}</p>
              <p>Email: {student.email}</p>
              <div className="marks-container">
                <strong>Marks:</strong>
                {Object.entries(student.marks).map(([subject, mark]) => (
                  <p key={subject}>
                    {subject}: <span className="mark-value">{mark}</span>
                  </p>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ShowAllResults;
