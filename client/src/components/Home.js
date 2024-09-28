import React from "react";
import Layout from "../components/Layout/Layout"; // Import the Layout component
import "../styles/Home.css"; // Import your custom CSS

const HomePage = () => {
  return (
    <Layout>
      <div className="home-container">
        {/* Left column content */}
        <div className="column left-column">
          <h1>Welcome to the Result Management System</h1>
          <p>
            Our platform streamlines the management of student performance across various aspects, making it easier for administrators, teachers, and students to stay on track. With cutting-edge features designed to save time and reduce errors, managing student results has never been more efficient.
          </p>
          <ul>
            <li>
              Manage attendance, project reviews, and LinkedIn post performance in one intuitive interface.
            </li>
            <li>
              Import and export data seamlessly through Excel, allowing for quick updates and detailed analysis.
            </li>
            <li>
              Real-time tracking of student progress, ensuring that every assessment is up-to-date.
            </li>
            <li>
              Simplify complex data with detailed reports and analysis for teachers and administrators.
            </li>
          </ul>
        </div>

        {/* Right column content */}
        <div className="column right-column">
          <h1>Why Choose Us?</h1>
          <ul>
            <li>
              User-friendly interface: Designed for easy navigation by both teachers and students.
            </li>
            <li>
              Automated tracking: Seamlessly track attendance and project reviews without manual effort.
            </li>
            <li>
              LinkedIn post performance analysis: Monitor student engagement and professional growth.
            </li>
            <li>
              Real-time updates: Stay informed with instant notifications and progress updates.
            </li>
            <li>
              Customizable dashboards: Tailor your view to focus on the data that matters most to you.
            </li>
            <li>
              Secure data handling: Your information is safely stored and easily retrievable when needed.
            </li>
            <li>
              Mobile-responsive: Access the platform from any device, anywhere.
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>Summary</h3>
            <p>
              Our Result Management System aims to revolutionize the way educational institutions handle student performance data. With a focus on ease-of-use and innovation, we are committed to delivering the best experience for both educators and students.
            </p>
          </div>
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>
              <li><a href="/contact">Support</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: support@resultmanagementsystem.com</p>
            <p>Phone: +91 9565816219</p>
            <p>Address: 1234 StreetBanglore City, India</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Result Management System | All Rights Reserved</p>
        </div>
      </footer>
    </Layout>
  );
};

export default HomePage;
