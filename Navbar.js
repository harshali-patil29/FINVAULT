import React, { useState } from "react";
import { FaSearch, FaBell, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate(); // Create a navigate function

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Add any logout logic here, such as clearing user tokens
    console.log("User logged out");
    navigate("/signin"); // Redirect to the Signin page
  };

  const handleUpdate = () => {
    // Navigate to the Update Profile page
    console.log("Navigating to update profile");
    navigate("/updatePro"); // Corrected path
  };

  return (
    <div className="navbar">
      <h2>Finvault</h2>

      <div className="search-bar">
        <input type="text" placeholder="Search for something" />
        <button>
          <FaSearch />
        </button>
      </div>

      <div className="navbar-icons">
        <FaBell className="navbar-icon" />
        <FaCog className="navbar-icon" />

        <div className="user-icon-container" onClick={toggleDropdown}>
          <img
            src="/logo.jpg" // Ensure the image is placed in the public folder
            alt="User Avatar"
            className="user-avatar"
          />
          {showDropdown && (
            <div className="dropdown-menu">
               <div>
                <button onClick={handleUpdate} className="logout-button">
                  Update Profile
                </button>
              </div>
              <div>
              <button onClick={handleLogout} className="logout-button">
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
