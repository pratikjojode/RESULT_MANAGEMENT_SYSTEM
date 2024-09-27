import React from "react";
import Layout from "./Layout/Layout.js";
// Import the Layout component

const AboutPage = () => {
  return (
    <Layout>
      {/* Left column content */}
      <div className="left-column">
        <h2>About Us</h2>
        <p>
          Welcome to our result management system! We are dedicated to providing
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
          Our mission is to streamline the process of result management, making
          it easier for educational institutions to track and assess student
          performance.
        </p>
        <h2>Our Vision</h2>
        <p>
          We envision a future where educational institutions can focus more on
          teaching and learning, while we take care of the result management.
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
