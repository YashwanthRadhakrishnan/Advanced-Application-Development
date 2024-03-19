import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/Login.css'
const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const eventHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitLoginForm = async (e) => {
    e.preventDefault();

    try {
      // Your authentication logic here
      navigate('/'); // Redirect to the home page after successful login
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div style={{backgroundImage:"url(/bg.jpeg)"}}>
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-header">Login</h2>
        <form onSubmit={submitLoginForm}>
          <div className="form-group">
            <label className="label">Email:</label>
            <input
              type="email"
              className="input-field"
              name="email"
              onChange={eventHandler}
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
              onChange={eventHandler}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="form-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
        <div className='admin'>Admin? <Link to="/login1">Login</Link></div>
      </div>
    </div>
    </div>
  );
};

export default Login;
