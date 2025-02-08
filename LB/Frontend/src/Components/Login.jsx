import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import logo from '../assets/Images/logo.png';

const Login = ({ closeModal, openSignupModal, openForgetPasswordModal, message }) => {
  const [userType, setUserType] = useState('');
  const [NID, setNID] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { NID, password, userType });
      alert(response.data.message);
      if (userType === 'hospital') {
        navigate('/hospital-dashboard');
      } else if (userType === 'doctor') {
        navigate('/doctor-dashboard');
      } else if (userType === 'patient') {
        navigate('/patient-dashboard');
      } else {
        closeModal();
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Login failed');
      }
    }
  };

  const handleNIDChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setNID(value);
      setWarning('');
    } else {
      setWarning('NID must be a number');
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
          {errorMessage && <p className="error-message">{errorMessage}</p>}
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
              <label htmlFor="NID">NID</label>
              <input
                type="number"
                id="NID"
                value={NID}
                onChange={handleNIDChange}
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