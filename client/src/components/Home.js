import React from "react";
import Layout from "../components/Layout/Layout"; // Import the Layout component
import "../styles/Home.css"; // Import your custom CSS

const HomePage = () => {
  return (
    <Layout>
      <div className="home-container">
        {/* Left column content */}
        <div className="column left-column">
          <h1>Welcome to Result Management System</h1>
          <ul>
          <li>
            Effortlessly manage students' attendance, project reviews, and LinkedIn posts, all from one platform.
          </li>
          <li> 
            Easily track and manage student attendance, project reviews, and LinkedIn post performance in one centralized platform.
          </li>
          <li>
            Intuitive design ensures that both administrators and students can navigate the system with ease.
          </li>
          <li>
            Simplify data handling with Excel file imports for attendance, reviews, and LinkedIn data, and export data for further analysis.
          </li>
          </ul>
        </div>

        {/* Right column content */}
        <div className="column right-column">
          <h1>Why Choose Us?</h1>
          <ul>
            <li>Easy for both teachers and students to use</li>
            <li>Seamless attendance and project review tracking</li>
            <li>Integrated LinkedIn post analysis</li>
            <li>Real-time updates and reports</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};


export default HomePage;
