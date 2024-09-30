import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../styles/CreateResultForm.css"; // Custom CSS for additional styling

const CreateResultForm = () => {
  const { studentId } = useParams(); // Get studentId from the URL
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    totalMarks: "",
    grade: "",
    passed: false,
    remarks: "",
    individualMarks: {
      attendance: "",
      projectReview: "",
      assessment: "",
      projectSubmission: "",
      linkedInPost: "",
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith("individualMarks")) {
      setFormData((prev) => ({
        ...prev,
        individualMarks: {
          ...prev.individualMarks,
          [name.split(".")[1]]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `/api/v1/student/createStudentresult/${studentId}`,
        formData
      );
      alert(response.data.message); // Display success message
      setFormData({
        // Reset form data
        totalMarks: "",
        grade: "",
        passed: false,
        remarks: "",
        individualMarks: {
          attendance: "",
          projectReview: "",
          assessment: "",
          projectSubmission: "",
          linkedInPost: "",
        },
      });
    } catch (error) {
      console.error("Error creating result:", error);
      alert("An error occurred while creating the result.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="result-form-container">
      <h2>Create Student Result</h2>
      <form className="result-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label>Total Marks</label>
          <input
            type="number"
            name="totalMarks"
            value={formData.totalMarks}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Grade</label>
          <input
            type="text"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="passed"
              checked={formData.passed}
              onChange={handleChange}
            />
            Passed
          </label>
        </div>

        <div className="form-group">
          <label>Remarks</label>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
          ></textarea>
        </div>

        <h3>Individual Marks</h3>
        <div className="form-group">
          <label>Attendance</label>
          <input
            type="number"
            name="individualMarks.attendance"
            value={formData.individualMarks.attendance}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Project Review</label>
          <input
            type="number"
            name="individualMarks.projectReview"
            value={formData.individualMarks.projectReview}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Assessment</label>
          <input
            type="number"
            name="individualMarks.assessment"
            value={formData.individualMarks.assessment}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Project Submission</label>
          <input
            type="number"
            name="individualMarks.projectSubmission"
            value={formData.individualMarks.projectSubmission}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>LinkedIn Post</label>
          <input
            type="number"
            name="individualMarks.linkedInPost"
            value={formData.individualMarks.linkedInPost}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CreateResultForm;
