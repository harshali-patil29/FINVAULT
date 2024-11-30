/*import React from "react";
import "./TransactionPage.css";

const TransactionPage = () => {
  const transactions = [
    {
      id: 1,
      description: "Spotify Subscription",
      date: "28 Jan 2021",
      amount: "-$2,500",
      status: "Pending",
    },
    {
      id: 2,
      description: "Netflix Subscription",
      date: "25 Jan 2021",
      amount: "-$200",
      status: "Completed",
    },
    {
      id: 3,
      description: "Amazon Order",
      date: "20 Jan 2021",
      amount: "-$75",
      status: "Completed",
    },
    {
      id: 4,
      description: "Salary Credit",
      date: "15 Jan 2021",
      amount: "+$5,000",
      status: "Completed",
    },
    {
      id: 5,
      description: "Electricity Bill",
      date: "10 Jan 2021",
      amount: "-$150",
      status: "Completed",
    },
    
  ];

  return (
    <div className="transactions-container">
      <h2>Transactions</h2>
      <div className="transactions-list">
        {transactions.map((transaction) => (
          <div className="transaction-card" key={transaction.id}>
            <h3>{transaction.description}</h3>
            <p>Date: <strong>{transaction.date}</strong></p>
            <p>Amount: <strong className={transaction.amount.startsWith("-") ? "expense" : "income"}>{transaction.amount}</strong></p>
            <p>Status: <span className={transaction.status === "Pending" ? "pending" : "completed"}>{transaction.status}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionPage;
*/

import React from "react";
import "./TransactionPage.css";

const TransactionPage = () => {
  const transactions = [
    {
      id: 1,
      description: "Spotify Subscription",
      date: "28 Jan 2021",
      amount: "-$2,500",
      status: "Pending",
    },
    {
      id: 2,
      description: "Netflix Subscription",
      date: "25 Jan 2021",
      amount: "-$200",
      status: "Completed",
    },
    {
      id: 3,
      description: "Amazon Order",
      date: "20 Jan 2021",
      amount: "-$75",
      status: "Completed",
    },
    {
      id: 4,
      description: "Salary Credit",
      date: "15 Jan 2021",
      amount: "+$5,000",
      status: "Completed",
    },
    {
      id: 5,
      description: "Electricity Bill",
      date: "10 Jan 2021",
      amount: "-$150",
      status: "Completed",
    },
  ];

  return (
    <div className="transactions-container">
      <h2>Transactions</h2>
      <div className="transactions-list">
        {transactions.map((transaction) => (
          <div className="transaction-card" key={transaction.id}>
            <h3>{transaction.description}</h3>
            <p>Date: <strong>{transaction.date}</strong></p>
            <p>Amount: <strong className={transaction.amount.startsWith("-") ? "expense" : "income"}>{transaction.amount}</strong></p>
            <p>Status: <span className={transaction.status === "Pending" ? "pending" : "completed"}>{transaction.status}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionPage;
