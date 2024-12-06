import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      {/* Navbar */}
      <Navbar />

      <div className="main-layout">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
