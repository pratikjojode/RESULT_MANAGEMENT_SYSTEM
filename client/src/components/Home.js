import React from "react";
import Layout from "../components/Layout/Layout.js"; // Import the Layout component

const HomePage = () => {
  return (
    <Layout>
      {/* Left column content */}
      <div className="left-column">
        <h2>Left Column Content</h2>
        <p>This is where you can put the content for the left column.</p>
      </div>

      {/* Right column content */}
      <div className="right-column">
        <h2>Right Column Content</h2>
        <p>This is where you can put the content for the right column.</p>
      </div>
    </Layout>
  );
};

export default HomePage;
