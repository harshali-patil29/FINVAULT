import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import Accounts from "./components/Accounts";
import Investments from "./components/Investments";
import CreditCards from "./components/CreditCards"; 
import Loans from "./components/Loans"; 
import Services from "./components/Services"; 
import Sidebar from "./components/Sidebar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root ("/") to SignIn */}
        <Route path="/" element={<Navigate to="/signin" />} />

        {/* Authentication Routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes within Layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/creditcards" element={<CreditCards />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sidebar" element={<Sidebar />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;