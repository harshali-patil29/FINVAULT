import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    { id: 1, title: "Business loans", description: "Unlock your business's potential with flexible, hassle-free loans designed to fuel growth and drive success." },
    { id: 2, title: "Checking accounts", description: "Manage your money effortlessly with a checking account, offering easy access, convenience, and seamless transactions for everyday needs." },
    { id: 3, title: "Debit and credit cards", description: "Enjoy fast, secure payments and financial flexibility with our debit and credit cards, designed for effortless spending and rewards."},
    { id: 4, title: "Life Insurance", description: "Secure your family's future with life insurance, offering peace of mind and financial protection when they need it most."},

  ];

  return (
    <div className="services-container">
      <h2>Services</h2>

      {/* Highlighted Services */}
      <div className="highlighted-services">
  <div className="service-card life-insurance">
    <h3>Life Insurance</h3>
    <p>Unlimited protection</p>
  </div>
  <div className="service-card shopping">
    <h3>Shopping</h3>
    <p>Buy. Think. Grow.</p>
  </div>
  <div className="service-card safety">
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
