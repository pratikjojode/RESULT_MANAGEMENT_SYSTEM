import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../styles/Graphs.css"; // Import your CSS file

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Graphs = () => {
  const barData = {
    labels: ["Student A", "Student B", "Student C", "Student D"],
    datasets: [
      {
        label: "Marks",
        data: [85, 90, 75, 80],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Attendance Rate (%)",
        data: [80, 85, 90, 95, 92, 88, 94],
        fill: false,
        backgroundColor: "rgba(255, 99, 132, 1)",
        borderColor: "rgba(255, 99, 132, 0.6)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="graphs">
      <div className="graph-container">
        <h3>Marks Distribution</h3>
        <Bar data={barData} options={options} />
      </div>
      <div className="graph-container">
        <h3>Attendance Rate Over Time</h3>
        <Line data={lineData} options={options} />
      </div>
    </div>
  );
};

export default Graphs;
