import React from "react";
import "../styles/DashBoardInfo.css";

import attendance from "../../src/assets/image.png";
import assestment from "../../src/assets/image copy.png";
import report from "../../src/assets/image copy 3.png";
import abcd from "../../src/assets/image copy 2.png";
import Graphs from "./Graphs";
const DashbordInfo = () => {
  return (
    <div className="dashboard-info">
      <div className="dashboard-content">
        <h1>Good afternoon,Student</h1>

        <p>
          Use the navigation links on the left to view your profile, search for
          student details, check your results, or return to the home page. We
          are committed to providing a smooth and user-friendly experience for
          all our students.
        </p>
      </div>
      <div className="dashboard-flex">
        <div className="card">
          <img src={attendance} alt="image"></img>
          <h2>Assessment Overview</h2>
        </div>
        <div className="card">
          <img src={assestment} alt="image"></img>
          <h2>View Results</h2>
        </div>
        <div className="card">
          <img src={report} alt="image"></img>
          <h2>Attendance Record</h2>
        </div>
        <div className="card">
          <img src={abcd} alt="image"></img>
          <h2>Download Report Card</h2>
        </div>
      </div>
      <div className="graphs">
        <Graphs />
      </div>
    </div>
  );
};

export default DashbordInfo;
