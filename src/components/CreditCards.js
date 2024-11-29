import React from "react";
import { Pie } from "react-chartjs-2";
import "./CreditCards.css";

const CreditCards = () => {
  const cards = [
    { id: 1, type: "Secondary", bank: "DBL Bank", number: "**** **** **** 5600", holder: "William" },
    { id: 2, type: "Secondary", bank: "BRC Bank", number: "**** **** **** 4300", holder: "Michel" },
    { id: 3, type: "Secondary", bank: "ABM Bank", number: "**** **** **** 7560", holder: "Edward" },
  ];

  const cardStatsData = {
    labels: ["DBL Bank", "BRC Bank", "ABM Bank", "MCP Bank"],
    datasets: [
      {
        data: [300, 200, 100, 50],
        backgroundColor: ["#007bff", "#6c757d", "#17a2b8", "#ffc107"],
        borderWidth: 0,
      },
    ],
  };

  const cardStatsOptions = {
    plugins: {
      legend: { position: "bottom" },
    },
  };

  return (
    <div className="credit-cards-container">
      <h2>Credit Cards</h2>

      {/* My Cards Section */}
      <div className="my-cards">
        <h3>My Cards</h3>
        <div className="card-list">
          <div className="card">
            <p>Balance: $5,756</p>
            <p>Card Holder: Eddy Cusuma</p>
            <p>Valid Thru: 12/22</p>
            <p>**** **** **** 1234</p>
          </div>
          <div className="card">
            <p>Balance: $5,756</p>
            <p>Card Holder: Eddy Cusuma</p>
            <p>Valid Thru: 12/22</p>
            <p>**** **** **** 1234</p>
          </div>
          <div className="card">
            <p>Balance: $5,756</p>
            <p>Card Holder: Eddy Cusuma</p>
            <p>Valid Thru: 12/22</p>
            <p>**** **** **** 1234</p>
          </div>
        </div>
      </div>

      {/* Card Stats & List */}
      <div className="card-stats-list">
        <div className="card-expense-stats">
          <h3>Card Expense Statistics</h3>
          <Pie data={cardStatsData} options={cardStatsOptions} />
        </div>
        <div className="card-list-details">
          <h3>Card List</h3>
          <table>
            <thead>
              <tr>
                <th>Card Type</th>
                <th>Bank</th>
                <th>Card Number</th>
                <th>Holder</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cards.map((card) => (
                <tr key={card.id}>
                  <td>{card.type}</td>
                  <td>{card.bank}</td>
                  <td>{card.number}</td>
                  <td>{card.holder}</td>
                  <td>
                    <button className="view-details-btn">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add New Card & Card Setting */}
      <div className="add-card-settings">
        <div className="add-card">
          <h3>Add New Card</h3>
          <form>
            <label>Card Type</label>
            <input type="text" placeholder="Classic" />
            <label>Name On Card</label>
            <input type="text" placeholder="My Cards" />
            <label>Card Number</label>
            <input type="text" placeholder="**** **** **** ****" />
            <label>Expiration Date</label>
            <input type="date" />
            <button type="submit">Add Card</button>
          </form>
        </div>
        <div className="card-settings">
          <h3>Card Setting</h3>
          <ul>
            <li>Block Card</li>
            <li>Change Pin Code</li>
            <li>Add to Google Pay</li>
            <li>Add to Apple Pay</li>
            <li>Add to App Store</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreditCards;
