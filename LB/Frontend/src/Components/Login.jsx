import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../assets/Images/logo.png';

const Login = ({ closeModal, openSignupModal, openForgetPasswordModal, message }) => {
  const [userType, setUserType] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userType === 'hospital') {
      navigate('/hospital-dashboard');
    } else if (userType === 'doctor') {
      navigate('/doctor-dashboard');
    } else if (userType === 'patient') {
      navigate('/patient-dashboard'); // Navigate to patient dashboard
    } else {
      console.log({ userType, userId, password });
      closeModal();
    }
  };

  const handleUserIdChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setUserId(value);
      setWarning('');
    } else {
      setWarning('User ID must be a number');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <div className="form-container">
          <img src={logo} alt="Site Logo" className="form-logo" />
          <h1 className="form-title">Sign in to your account</h1>
          {message && <p className="login-message">{message}</p>}
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="userType">User Type</label>
              <select
                id="userType"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                required
                className="form-input"
              >
                <option value="">Select User Type</option>
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>
                <option value="hospital">Hospital</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="userId">User ID</label>
              <input
                type="text"
                id="userId"
                value={userId}
                onChange={handleUserIdChange}
                required
                className="form-input"
              />
              {warning && <p className="warning">{warning}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <button type="submit" className="form-button">Login</button>
          </form>
          <div className="form-footer">
            <button onClick={openForgetPasswordModal} className="form-link">Forgot Password</button>
            <button onClick={openSignupModal} className="form-link">Create New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;