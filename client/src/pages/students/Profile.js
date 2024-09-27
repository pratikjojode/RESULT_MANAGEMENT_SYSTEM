import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams

const Profile = () => {
  const { studentId } = useParams(); // Get studentId from URL parameters
  const [student, setStudent] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudentProfile = async () => {
      try {
        const response = await axios.get(
          `/api/v1/student/getStudentId/${studentId}`
        );
        const data = response.data;

        if (data.success) {
          setStudent(data.student);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError("An error occurred while fetching student data");
      } finally {
        setLoading(false);
      }
    };

    if (studentId) {
      // Check if studentId is defined before fetching
      fetchStudentProfile();
    }
  }, [studentId]); // Fetch when studentId changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="profile">
      <h2>Student Profile</h2>
      <p>
        <strong>Name:</strong> {student.name}
      </p>
      <p>
        <strong>Email:</strong> {student.email}
      </p>
      <p>
        <strong>Student ID:</strong> {student.studentId}
      </p>
      <h3>Marks</h3>
      <ul>
        <li>
          <strong>Attendance:</strong> {student.marks.attendance}
        </li>
        <li>
          <strong>Project Review:</strong> {student.marks.projectReview}
        </li>
        <li>
          <strong>Assessment:</strong> {student.marks.assessment}
        </li>
        <li>
          <strong>Project Submission:</strong> {student.marks.projectSubmission}
        </li>
        <li>
          <strong>LinkedIn Post:</strong> {student.marks.linkedInPost}
        </li>
      </ul>
    </div>
  );
};

export default Profile;
