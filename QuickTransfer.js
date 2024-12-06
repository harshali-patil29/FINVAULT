import React from "react";
import "./QuickTransfer.css";

function QuickTransfer() {
  const users = [
    { name: "Livia Bator", role: "CEO" },
    { name: "Livia Bator", role: "CEO" },
    { name: "Livia Bator", role: "CEO" },
  ];

  return (
    <div className="quick-transfer">
      <h2>Quick Transfer</h2>
      <div className="transfer-list">
        {users.map((user, index) => (
          <div className="user-card" key={index}>
            <img
              src={`https://via.placeholder.com/50`}
              alt={user.name}
              className="user-avatar"
            />
            <div>
              <p className="user-name">{user.name}</p>
              <p className="user-role">{user.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="transfer-action">
        <input type="text" placeholder="Write Amount" />
        <button className="send-btn">Send</button>
      </div>
    </div>
  );
}

export default QuickTransfer;
