import React from "react";
import "./Accounts.css";
import Card from "./Card";
import WeeklyActivity from "./WeeklyActivity";

const Accounts = () => {
  const transactions = [
    {
      id: 1,
      description: "Spotify Subscription",
      type: "Shopping",
      card: "1234 ****",
      date: "25 Jan 2021",
      status: "Pending",
      amount: "-$150",
    },
    {
      id: 2,
      description: "Mobile Service",
      type: "Service",
      card: "1234 ****",
      date: "25 Jan 2021",
      status: "Completed",
      amount: "-$340",
    },
    {
      id: 3,
      description: "Emilly Wilson",
      type: "Transfer",
      card: "1234 ****",
      date: "25 Jan 2021",
      status: "Completed",
      amount: "+$780",
    },
  ];

  const invoices = [
    { id: 1, name: "Apple Store", amount: "$450", time: "5h ago" },
    { id: 2, name: "Michael", amount: "$160", time: "2 days ago" },
    { id: 3, name: "Playstation", amount: "$1085", time: "5 days ago" },
    { id: 4, name: "William", amount: "$90", time: "10 days ago" },
  ];

  return (
    <div className="accounts-container">
      <h2>Accounts</h2>

      {/* Summary Section */}
      <div className="summary-section">
        <div className="summary-card">
          <h3>My Balance</h3>
          <p>$12,750</p>
        </div>
        <div className="summary-card">
          <h3>Income</h3>
          <p>$5,600</p>
        </div>
        <div className="summary-card">
          <h3>Expense</h3>
          <p>$3,460</p>
        </div>
        <div className="summary-card">
          <h3>Total Saving</h3>
          <p>$7,920</p>
        </div>
      </div>

      {/* Last Transaction Section */}
      <div className="last-transaction-section">
        <h3>Last Transaction</h3>
        {transactions.map((transaction) => (
          <div className="transaction-item" key={transaction.id}>
            <div>
              <h4>{transaction.description}</h4>
              <p>{transaction.type}</p>
              <p>{transaction.date}</p>
            </div>
            <div>
              <p>{transaction.card}</p>
              <p className={transaction.amount.startsWith("-") ? "expense" : "income"}>
                {transaction.amount}
              </p>
              <p
                className={`status ${
                  transaction.status === "Pending" ? "pending" : "completed"
                }`}
              >
                {transaction.status}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Debit & Credit Overview */}
      <div className="overview-section">
        <h3>Debit & Credit Overview</h3>
        <WeeklyActivity />
      </div>

      {/* Card and Invoice Section */}
      <div className="card-invoice-section">
        <div className="my-card">
          <Card
            balance="5756"
            cardHolder="Eddy Cusuma"
            validThru="12/22"
            cardNumber="3778 **** **** 1234"
          />
        </div>

        <div className="invoices-section">
          <h3>Invoices Sent</h3>
          {invoices.map((invoice) => (
            <div className="invoice-item" key={invoice.id}>
              <h4>{invoice.name}</h4>
              <p>{invoice.time}</p>
              <p>{invoice.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accounts;
