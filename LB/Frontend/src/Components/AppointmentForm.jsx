import React, { useState } from 'react';
import './AppointmentForm.css';
import logo from '../assets/Images/logo.png';

const AppointmentForm = ({ appointment, closeModal }) => {
  const [formData, setFormData] = useState({
    hospitalName: appointment.hospital,
    doctorName: appointment.doctor,
    symptoms: '',
    days: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    closeModal();
  };

  return (
    <div className="appointment-form">
      <img src={logo} alt="Site Logo" className="form-logo" />
      <h2>Request Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Hospital Name:
          <input type="text" name="hospitalName" value={formData.hospitalName} readOnly />
        </label>
        <label>
          Doctor's Name:
          <input type="text" name="doctorName" value={formData.doctorName} readOnly />
        </label>
        <label>
          Symptoms:
          <textarea name="symptoms" value={formData.symptoms} onChange={handleChange} required />
        </label>
        <label>
          How many days?:
          <input type="number" name="days" value={formData.days} onChange={handleChange} required />
        </label>
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default AppointmentForm;