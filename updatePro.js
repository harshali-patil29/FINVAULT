import React, { useState } from "react";
import "./updatePro.css";

function UpdatePro() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dob: '',
  });

  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile Updated:', formData);
    alert('Profile updated successfully!');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <h2 className="header">Update Profile</h2>

      {/* Profile Image Section */}
      <div className="profile-image-container">
        <label htmlFor="profileImageUpload">
          <img
            src={profileImage || "https://via.placeholder.com/150"}
            alt="Profile"
            className="profile-image"
          />
        </label>
        <input
          type="file"
          id="profileImageUpload"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label className="label">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <button type="submit" className="button">Update</button>
      </form>
    </div>
  );
}

export default UpdatePro;
