import React from "react";
import "./Loans.css";

const Loans = () => {
  const loans = [
    { id: 1, loanMoney: "$100,000", leftToRepay: "$40,500", duration: "8 Months", interestRate: "12%", installment: "$2,000 / month" },
    { id: 2, loanMoney: "$500,000", leftToRepay: "$250,000", duration: "36 Months", interestRate: "10%", installment: "$8,000 / month" },
    { id: 3, loanMoney: "$900,000", leftToRepay: "$40,500", duration: "12 Months", interestRate: "12%", installment: "$5,000 / month" },
    { id: 4, loanMoney: "$50,000", leftToRepay: "$40,500", duration: "25 Months", interestRate: "5%", installment: "$2,000 / month" },
    { id: 5, loanMoney: "$50,000", leftToRepay: "$40,500", duration: "5 Months", interestRate: "16%", installment: "$10,000 / month" },
    { id: 6, loanMoney: "$80,000", leftToRepay: "$25,500", duration: "14 Months", interestRate: "8%", installment: "$2,000 / month" },
    { id: 7, loanMoney: "$12,000", leftToRepay: "$5,500", duration: "9 Months", interestRate: "13%", installment: "$500 / month" },
    { id: 8, loanMoney: "$160,000", leftToRepay: "$100,800", duration: "3 Months", interestRate: "12%", installment: "$900 / month" },
  ];

  return (
    <div className="loans-container">
      <h2>Loan</h2>

      {/* Loan Summary Section */}
      <div className="loan-summary">
        <div className="loan-card">
          <h3>Personal Loans</h3>
          <p>$50,000</p>
        </div>
        <div className="loan-card">
          <h3>Corporate Loans</h3>
          <p>$100,000</p>
        </div>
        <div className="loan-card">
          <h3>Business Loans</h3>
          <p>$500,000</p>
        </div>
        <div className="loan-card">
          <h3>Custom Loans</h3>
          <p>Choose Money</p>
        </div>
      </div>

      {/* Active Loans Overview */}
      <div className="active-loans">
        <h3>Active Loans Overview</h3>
        <table>
          <thead>
            <tr>
              <th>SL No</th>
              <th>Loan Money</th>
              <th>Left to repay</th>
              <th>Duration</th>
              <th>Interest rate</th>
              <th>Installment</th>
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
                <td>{loan.installment}</td>
                <td>
                  <button className="repay-btn">Repay</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">Total</td>
              <td>$750,000</td>
              <td></td>
              <td></td>
              <td>$50,000 / month</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Loans;
