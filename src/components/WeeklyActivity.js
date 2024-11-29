import React from "react";
import { Bar } from "react-chartjs-2";
import "./WeeklyActivity.css";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function WeeklyActivity() {
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Deposit",
        data: [500, 400, 300, 200, 500, 400, 300],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "Withdraw",
        data: [300, 200, 100, 400, 300, 200, 100],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="weekly-activity">
      <h2>Weekly Activity</h2>
      <Bar data={data} />
    </div>
  );
}

export default WeeklyActivity;
