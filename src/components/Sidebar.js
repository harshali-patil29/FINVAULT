import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Finvault</h2>
      <ul>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/transactions"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Transactions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/accounts"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Accounts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/investments"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Investments
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/CreditCards"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Credit Cards
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Loans"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Loans
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Services"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Services
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
