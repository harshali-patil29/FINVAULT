import React from "react";
import { Pie } from "react-chartjs-2";
import "./ExpenseStatistics.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseStatistics() {
  const data = {
    labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
    datasets: [
      {
        data: [30, 15, 20, 35],
        backgroundColor: ["#007bff", "#6c757d", "#28a745", "#ffc107"],
      },
    ],
  };

  return (
    <div className="expense-statistics">
      <h2>Expense Statistics</h2>
      <Pie data={data} />
    </div>
  );
}

export default ExpenseStatistics;
