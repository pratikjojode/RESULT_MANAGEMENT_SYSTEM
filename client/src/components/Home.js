import React from "react";
import Layout from "../components/Layout/Layout.js"; // Import the Layout component
import ".././styles/Home.css";

const HomePage = () => {
  return (
    <Layout>
      {/* Left column content */}
      <div className="left-column">
        <h1>Welcome to Result Management System</h1>
        <p>
          Manage students' attendance, project reviews, and LinkedIn posts all
          in one place.
        </p>
      </div>

      {/* Right column content */}
      <div className="right-column">
        <h1>Advantages of Result Management System</h1>
        <p>
          The most significant advantage of Result Management System is that it
          can be used efficiently by both the admins(Teachers) as well as the
          students.
        </p>
      </div>
    </Layout>
  );
};

export default HomePage;
