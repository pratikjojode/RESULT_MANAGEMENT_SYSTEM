import React from "react";
import Layout from "../components/Layout/Layout"; // Import the Layout component
import Fotter from "./Fotter";


const HomePage = () => {
  return (
    <Layout>
      <div className="home-container">
        {/* Left column content */}

        <div className="box">
          <div className="column left-column">
            <h1>Welcome to the Result Management System</h1>
            <p>
              Our platform streamlines the management of student performance
              across various aspects, making it easier for administrators,
              teachers, and students to stay on track. With cutting-edge
              features designed to save time and reduce errors, managing student
              results has never been more efficient.
            </p>
            <ul>
              <li>
                Manage attendance, project reviews, and LinkedIn post
                performance in one intuitive interface.
              </li>
              <li>
                Import and export data seamlessly through Excel, allowing for
                quick updates and detailed analysis.
              </li>
              <li>
                Real-time tracking of student progress, ensuring that every
                assessment is up-to-date.
              </li>
              <li>
                Simplify complex data with detailed reports and analysis for
                teachers and administrators.
              </li>
            </ul>
          </div>

          <div className="column right-column">
            <h1>Why Choose Us?</h1>
            <ul>
              <li>
                User-friendly interface: Designed for easy navigation by both
                teachers and students.
              </li>
              <li>
                Automated tracking: Seamlessly track attendance and project
                reviews without manual effort.
              </li>
              <li>
                LinkedIn post performance analysis: Monitor student engagement
                and professional growth.
              </li>
              <li>
                Real-time updates: Stay informed with instant notifications and
                progress updates.
              </li>
              <li>
                Customizable dashboards: Tailor your view to focus on the data
                that matters most to you.
              </li>
              <li>
                Secure data handling: Your information is safely stored and
                easily retrievable when needed.
              </li>
              <li>
                Mobile-responsive: Access the platform from any device,
                anywhere.
              </li>
            </ul>
          </div>
        </div>
      
      </div>

      {/* Footer */}
    </Layout>
  );
};

export default HomePage;
