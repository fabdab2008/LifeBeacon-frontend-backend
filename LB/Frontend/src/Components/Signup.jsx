import React, { useState, useEffect } from 'react';
import './Signup.css';
import logo from '../assets/Images/logo.png';

const Signup = ({ closeModal }) => {
  const [userType, setUserType] = useState('');
  const [name, setName] = useState('');
  const [nid, setNid] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [employeePost, setEmployeePost] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const newErrors = { ...errors };
    if (!/^\d*$/.test(nid)) {
      newErrors.nid = 'NID/Birth Certificate No must be a number';
    } else {
      delete newErrors.nid;
    }
    setErrors(newErrors);
  }, [nid]);

  useEffect(() => {
    const newErrors = { ...errors };
    if (!/^\d*$/.test(phone)) {
      newErrors.phone = 'Phone Number must be a number';
    } else {
      delete newErrors.phone;
    }
    setErrors(newErrors);
  }, [phone]);

  useEffect(() => {
    const newErrors = { ...errors };
    if (password !== confirmPassword) {
      newErrors.password = 'Passwords do not match';
    } else {
      delete newErrors.password;
    }
    setErrors(newErrors);
  }, [password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      // Handle form submission logic here
      console.log({ userType, name, nid, hospitalName, employeePost, phone, email, password, confirmPassword });
      closeModal();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <div className="form-container">
          <img src={logo} alt="Site Logo" className="form-logo" />
          <h1 className="form-title">Create a new account</h1>
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
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="nid">NID/Birth Certificate No</label>
              <input
                type="text"
                id="nid"
                value={nid}
                onChange={(e) => setNid(e.target.value)}
                required
                className="form-input"
              />
              {errors.nid && <p className="error">{errors.nid}</p>}
            </div>
            {userType === 'hospital' && (
              <>
                <div className="form-group">
                  <label htmlFor="hospitalName">Hospital Name</label>
                  <input
                    type="text"
                    id="hospitalName"
                    value={hospitalName}
                    onChange={(e) => setHospitalName(e.target.value)}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="employeePost">Employee Post</label>
                  <input
                    type="text"
                    id="employeePost"
                    value={employeePost}
                    onChange={(e) => setEmployeePost(e.target.value)}
                    required
                    className="form-input"
                  />
                </div>
              </>
            )}
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="form-input"
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
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
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="form-input"
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <button type="submit" className="form-button">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;