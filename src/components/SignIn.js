import React from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    // Simulate successful sign-in logic
    console.log("Sign-in successful!");

    // Redirect to the dashboard
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Welcome Back</h2>
        <p>Sign in to your account</p>
        <form onSubmit={handleSignIn}>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="auth-btn">Sign In</button>
        </form>
        <div className="auth-footer">
          <p>
            Don't have an account?{" "}
            <a href="/signup" className="auth-link">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
