import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Card from "./Card";
import WeeklyActivity from "./WeeklyActivity";
import ExpenseStatistics from "./ExpenseStatistics";
import QuickTransfer from "./QuickTransfer";
import BalanceHistory from "./BalanceHistory";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <Navbar />

      <div className="main-layout">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Dashboard Content */}
        <div className="dashboard-content">
          {/* Cards Section */}
          <div className="cards-container">
            <Card
              balance="5756"
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778 **** **** 1234"
            />
            <Card
              balance="5756"
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778 **** **** 1234"
            />
          </div>

          {/* Statistics Section */}
          <div className="stats">
            <WeeklyActivity />
            <ExpenseStatistics />
          </div>

          {/* Extras Section */}
          <div className="extras">
            <QuickTransfer />
            <BalanceHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
