import React, { useState } from "react";
import axios from "axios";
import "../../styles/SearchResults.css"; // Import CSS file

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
    setError(null);

    try {
      const response = await axios.get(
        `/api/v1/student/getStudentresult/${query}`
      );

      if (response.data.success) {
        setResults([response.data.student]);
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
    <div className="search-results-container">
      <h3 className="search-title">Search result by Student ID</h3>
      <div className="search-input-container">
        <input
          className="search-input"
          type="text"
          placeholder="Enter Student ID"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      {loading && <p className="loading">Loading...</p>}
      {error && <div className="error">{error}</div>}

      {results.length > 0 && (
        <div className="results">
          <h4 className="results-title">Search Results:</h4>
          <ul className="results-list">
            {results.map((result) => (
              <li key={result.studentId} className="result-item">
                <div className="result-info">
                  <strong>Student ID:</strong> {result.studentId}
                </div>
                <div className="result-info">
                  <strong>Name:</strong> {result.name}
                </div>
                <div className="result-info">
                  <strong>Email:</strong> {result.email}
                </div>
                <div className="result-info">
                  <strong>Attendance:</strong> {result.marks.attendance}
                </div>
                <div className="result-info">
                  <strong>Project Review:</strong> {result.marks.projectReview}
                </div>
                <div className="result-info">
                  <strong>Assessment:</strong> {result.marks.assessment}
                </div>
                <div className="result-info">
                  <strong>LinkedIn Post:</strong> {result.marks.linkedInPost}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
