import React from "react";
import "./Card.css";

const Card = ({ balance, cardHolder, validThru, cardNumber }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-balance">
          <p>Balance</p>
          <h2>${balance}</h2>
        </div>
        <div className="card-chip">
          <i className="chip-icon">💳</i>
        </div>
      </div>
      <div className="card-details">
        <p>
          <strong>Card Holder</strong>
        </p>
        <p>{cardHolder}</p>
        <p>
          <strong>Valid Thru</strong>
        </p>
        <p>{validThru}</p>
      </div>
      <div className="card-number">
        {cardNumber}
      </div>
      <div className="card-footer">
        <div className="toggle-switch">
          <div className="toggle-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
