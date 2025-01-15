import React, { useState } from 'react';
import './AppointmentForm.css'; // Reuse the same CSS

const VaccinationForm = ({ addVaccination, closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    institution: '',
    nextDoseDate: ''
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
    addVaccination(formData);
    closeModal();
  };

  return (
    <div className="appointment-form">
      <h2>Add Vaccination Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name of the Vaccine:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>
        <label>
          Institution:
          <input type="text" name="institution" value={formData.institution} onChange={handleChange} required />
        </label>
        <label>
          Next Dose Date (If any):
          <input type="date" name="nextDoseDate" value={formData.nextDoseDate} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VaccinationForm;