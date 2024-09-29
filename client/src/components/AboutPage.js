import React from "react";
import Layout from "./Layout/Layout.js";
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

        {/* Key Features Section */}
        <h2>Key Features</h2>
        <ul>
          <li>Automated student result processing</li>
          <li>Easy integration with other education tools</li>
          <li>Secure storage of academic records</li>
          <li>Real-time feedback and analytics</li>
        </ul>
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

        {/* Our Values Section */}
        <h2>Our Values</h2>
        <p>
          We are committed to ensuring transparency, accuracy, and efficiency in
          everything we do. Our platform is built on the principles of
          integrity, innovation, and user-centric design.
        </p>

        {/* How We Work Section */}
        <h2>How We Work</h2>
        <p>
          We work closely with educational institutions to ensure that our
          system fits their specific needs. From development to deployment, we
          are focused on delivering a user-friendly and scalable solution.
        </p>

        {/* Meet the Team Section */}
        <h2>Meet the Team</h2>
        <p>
          Our team consists of experienced professionals in both the education
          and technology sectors. Together, we are passionate about improving
          the result management process for everyone involved.
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
