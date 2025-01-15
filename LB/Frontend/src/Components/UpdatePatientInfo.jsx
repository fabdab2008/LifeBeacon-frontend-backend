import React, { useState } from 'react';
import Select from 'react-select';
import './UpdateProfile.css';
import logo from '../assets/Images/logo.png';

const bloodGroupOptions = [
  { value: 'A+', label: 'A+' },
  { value: 'A-', label: 'A-' },
  { value: 'B+', label: 'B+' },
  { value: 'B-', label: 'B-' },
  { value: 'AB+', label: 'AB+' },
  { value: 'AB-', label: 'AB-' },
  { value: 'O+', label: 'O+' },
  { value: 'O-', label: 'O-' },
];

const UpdatePatientInfo = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    contactNumber: '',
    bloodGroup: '',
    profilePicture: null,
    allergicReaction: '',
    specialConsiderations: '',
    pregnancyStatus: ''
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData((prevData) => ({
        ...prevData,
        profilePicture: files[0]
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleBloodGroupChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      bloodGroup: selectedOption ? selectedOption.value : ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For example, send formData to the server
    console.log(formData);
    closeModal();
  };

  return (
    <div className="update-profile">
      <img src={logo} alt="Site Logo" className="form-logo" />
      <h2>Update Personal Info</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label>
        <label>
          Date of Birth:
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
        </label>
        <label>
          Additional Contact Number:
          <input type="number" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
        </label>
        <label>
          Blood Group:
          <Select
            name="bloodGroup"
            options={bloodGroupOptions}
            className="basic-single-select"
            classNamePrefix="select"
            onChange={handleBloodGroupChange}
            value={bloodGroupOptions.find(option => option.value === formData.bloodGroup)}
            required
          />
        </label>
        <label>
          Profile Picture:
          <input type="file" name="profilePicture" onChange={handleChange} required />
        </label>
        <label>
          Allergic Reaction:
          <input type="text" name="allergicReaction" value={formData.allergicReaction} onChange={handleChange} required />
        </label>
        <label>
          Special Considerations:
          <textarea name="specialConsiderations" value={formData.specialConsiderations} onChange={handleChange} required />
        </label>
        <label>
          Pregnancy Status:
          <input type="text" name="pregnancyStatus" value={formData.pregnancyStatus} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdatePatientInfo;