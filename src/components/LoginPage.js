import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';
import '../LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form-container">
          <form onSubmit={handleSubmit} className="login-form">
            <h1>Welcome Back</h1>
            <p className="subtitle">Please enter your details to sign in.</p>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-group">
                <FaLock className="input-icon" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            <button type="submit">
              <FaSignInAlt className="button-icon" /> Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
