import React from "react";
import "./Investments.css";
import { Line } from "react-chartjs-2";

const Investments = () => {
  const investments = [
    {
      id: 1,
      name: "Apple Store",
      type: "E-commerce, Marketplace",
      value: "$54,000",
      return: "+16%",
    },
    {
      id: 2,
      name: "Samsung Mobile",
      type: "E-commerce, Marketplace",
      value: "$25,300",
      return: "-4%",
    },
    {
      id: 3,
      name: "Tesla Motors",
      type: "Electric Vehicles",
      value: "$8,200",
      return: "+25%",
    },
  ];

  const trendingStocks = [
    { id: 1, name: "Trivago", price: "$520", return: "+5%" },
    { id: 2, name: "Canon", price: "$480", return: "+10%" },
    { id: 3, name: "Uber Food", price: "$350", return: "-3%" },
    { id: 4, name: "Nokia", price: "$940", return: "+2%" },
    { id: 5, name: "Tiktok", price: "$670", return: "-12%" },
  ];

  const chartData = {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
    datasets: [
      {
        label: "Investment Growth",
        data: [10000, 20000, 15000, 30000, 25000, 40000],
        borderColor: "#007bff",
        backgroundColor: "rgba(0, 123, 255, 0.1)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        ticks: { beginAtZero: true },
      },
    },
  };

  return (
    <div className="investments-container">
      <h2>Investments</h2>

      {/* Summary Section */}
      <div className="summary-section">
        <div className="summary-card">
          <h3>Total Invested Amount</h3>
          <p>$150,000</p>
        </div>
        <div className="summary-card">
          <h3>Number of Investments</h3>
          <p>1,250</p>
        </div>
        <div className="summary-card">
          <h3>Rate of Return</h3>
          <p>+5.80%</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        <div className="chart-card">
          <h3>Yearly Total Investment</h3>
          <Line data={chartData} options={options} />
        </div>
        <div className="chart-card">
          <h3>Monthly Revenue</h3>
          <Line data={chartData} options={options} />
        </div>
      </div>

      {/* Investment and Stock Sections */}
      <div className="investment-stock-section">
        {/* My Investment */}
        <div className="my-investment">
          <h3>My Investment</h3>
          {investments.map((investment) => (
            <div className="investment-item" key={investment.id}>
              <h4>{investment.name}</h4>
              <p>{investment.type}</p>
              <p>
                <strong>{investment.value}</strong>{" "}
                <span
                  className={
                    investment.return.startsWith("+") ? "positive" : "negative"
                  }
                >
                  {investment.return}
                </span>
              </p>
            </div>
          ))}
        </div>

        {/* Trending Stocks */}
        <div className="trending-stock">
          <h3>Trending Stock</h3>
          <table>
            <thead>
              <tr>
                <th>SL No</th>
                <th>Name</th>
                <th>Price</th>
                <th>Return</th>
              </tr>
            </thead>
            <tbody>
              {trendingStocks.map((stock) => (
                <tr key={stock.id}>
                  <td>{stock.id}</td>
                  <td>{stock.name}</td>
                  <td>{stock.price}</td>
                  <td
                    className={
                      stock.return.startsWith("+") ? "positive" : "negative"
                    }
                  >
                    {stock.return}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Investments;
