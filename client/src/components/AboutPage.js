import React from "react";
import Layout from "./Layout/Layout.js";
// Import the Layout component
import ".././styles/AboutPage.css";

const AboutPage = () => {
  return (
    <Layout>
      {/* Left column content */}
      <div className="left-column">
        <h2>About Us</h2>
        <p>
          Welcome to our Result Management System! We are dedicated to providing
          a seamless experience for managing student results and feedback.
        </p>
        <p>
          Our platform is designed to help admins easily upload and manage
          attendance, project reviews, assessments, and more.
        </p>
      </div>

      {/* Right column content */}
      <div className="right-column">
        <h2>Our Mission</h2>
        <p>
          Our mission is to streamline the process of Result Management, making
          it easier for educational institutions to track and assess student
          performance.
        </p>
        <h2>Our Vision</h2>
        <p>
          We envision a future where educational institutions can focus more on
          teaching and learning, while we take care of the Result Management.
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
