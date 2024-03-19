import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Signup.css'
const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobile: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (signup logic) here
    console.log(formData);

    // Redirect to login page after signup
    // Replace this with your actual signup logic
    // and redirection code
  };

  return (
    <div style={{backgroundImage:"url(/bg.jpeg)"}}>
    <div className="signup-page">
      <div className="signup-container">
        <h2 className="signup-header">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">First Name:</label>
            <input
              type="text"
              className="input-field"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="form-group">
            <label className="label">Last Name:</label>
            <input
              type="text"
              className="input-field"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className="form-group">
            <label className="label">Email:</label>
            <input
              type="email"
              className="input-field"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label className="label">Password:</label>
            <input
              type="password"
              className="input-field"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-group">
            <label className="label">Mobile:</label>
            <input
              type="password"
              className="input-field"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="Confirm your number"
              required
            />
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <div className="form-footer">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Signup;
