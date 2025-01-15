import React, { useState } from 'react';
import './ForgetPassword.css';
import logo from '../assets/Images/logo.png';

const ForgetPassword = ({ closeModal, openOtpCaptchaModal }) => {
  const [userType, setUserType] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ userType, email });
    closeModal();
    openOtpCaptchaModal();
    
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <div className="form-container">
          <img src={logo} alt="Site Logo" className="form-logo" />
          <h1 className="form-title">Reset your password</h1>
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
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <button type="submit" className="form-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;