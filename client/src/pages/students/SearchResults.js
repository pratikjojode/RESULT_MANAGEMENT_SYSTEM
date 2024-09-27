import React, { useState } from "react";
import axios from "axios"; // Ensure axios is imported

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) {
      setError("Please enter a student ID.");
      return;
    }

    setLoading(true);
    setError(null); // Reset any previous errors

    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/student/getStudentresult/${query}` // Updated URL
      );

      if (response.data.success) {
        setResults([response.data.student]); // Set the student data in results
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("An error occurred while fetching results.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Search by Student ID</h3>
      <input
        type="text"
        placeholder="Enter Student ID"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}

      {error && <div className="error">{error}</div>}

      {results.length > 0 && (
        <div>
          <h4>Search Results:</h4>
          <ul>
            {results.map((result) => (
              <li key={result.studentId}>
                <strong>Student ID:</strong> {result.studentId},
                <strong> Name:</strong> {result.name},<strong> Email:</strong>{" "}
                {result.email},<strong> Attendance:</strong>{" "}
                {result.marks.attendance},<strong> Project Review:</strong>{" "}
                {result.marks.projectReview}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
