import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    { id: 1, title: "Business loans", description: "It is a long established", details: "Lorem Ipsum" },
    { id: 2, title: "Checking accounts", description: "It is a long established", details: "Lorem Ipsum" },
    { id: 3, title: "Savings accounts", description: "It is a long established", details: "Lorem Ipsum" },
    { id: 4, title: "Debit and credit cards", description: "It is a long established", details: "Lorem Ipsum" },
    { id: 5, title: "Life Insurance", description: "It is a long established", details: "Lorem Ipsum" },
    { id: 6, title: "Business loans", description: "It is a long established", details: "Lorem Ipsum" },
  ];

  return (
    <div className="services-container">
      <h2>Services</h2>

      {/* Highlighted Services */}
      <div className="highlighted-services">
        <div className="service-card">
          <h3>Life Insurance</h3>
          <p>Unlimited protection</p>
        </div>
        <div className="service-card">
          <h3>Shopping</h3>
          <p>Buy. Think. Grow.</p>
        </div>
        <div className="service-card">
          <h3>Safety</h3>
          <p>We are your allies</p>
        </div>
      </div>

      {/* Bank Services List */}
      <div className="bank-services-list">
        <h3>Bank Services List</h3>
        {services.map((service) => (
          <div className="service-item" key={service.id}>
            <div className="service-info">
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
            <div className="service-details">
              <p>{service.details}</p>
              <button className="view-details-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
