import React from "react";
import "./Loans.css";
import { Link } from "react-router-dom";

const Loans = () => {
  const loans = [
    { id: 1, loanMoney: "Personal Loan", leftToRepay: "$40,500", duration: "8 Months", interestRate: "12%", installment: "$2,000 / month" },
    { id: 2, loanMoney: "Education Loan", leftToRepay: "$40,500", duration: "8 Months", interestRate: "10%", installment: "$2,000 / month" },
  ];

  return (
    <div className="loans-container">
      <h2>Loans</h2>

      {/* Loan Summary Section */}
      <div className="loan-summary">
        <div className="loan-card">
          {/* <h3>Loan Types</h3> */}
          <div>
            <p>
              <h3>Home Loan</h3><p className="info">A Home Loan is a financial 
                product that helps you buy or renovate a home. 
                Typically offered at lower interest rates, home 
                loans provide long-term repayment options. It is ideal
                 for individuals looking to purchase property or renovate 
                 their homes. The interest rate would be 8%</p>
             
                         
              <h3>Education Loan</h3><p className="info">An Education Loan is designed to help 
                students finance their education, 
                including tuition fees, living expenses, and other 
                related costs. Education loans often have flexible 
                repayment options and are available at competitive
                 interest rates. The interest rate would be 10%</p>
             
          
            </p>
            <button className="repay-btn">
              <Link to="/PersonalLoan">Apply for a Loan</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Active Loans Overview */}
      <div className="active-loans">
        <h3>Active Loans Overview</h3>
        <table>
          <thead>
            <tr>
              <th>SL No</th>
              <th>Loan type</th>
              <th>Left to repay</th>
              <th>Duration</th>
              <th>Interest rate</th>
              <th>Repay</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan, index) => (
              <tr key={loan.id}>
                <td>{`0${index + 1}`}</td>
                <td>{loan.loanMoney}</td>
                <td>{loan.leftToRepay}</td>
                <td>{loan.duration}</td>
                <td>{loan.interestRate}</td>
                <td>
                  <button className="repay-btn2">Repay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Loans;
