import React, { useState } from 'react';
import Select from 'react-select';
import './UpdateProfile.css';
import logo from '../assets/Images/logo.png';

const languagesOptions = [
  { value: 'English', label: 'English' },
  { value: 'Spanish', label: 'Spanish' },
  { value: 'French', label: 'French' },
  { value: 'German', label: 'German' },
  { value: 'Chinese', label: 'Chinese' },
  { value: 'Japanese', label: 'Japanese' },
  { value: 'Hindi', label: 'Hindi' },
  { value: 'Bengali', label: 'Bengali' },
  { value: 'Portuguese', label: 'Portuguese' },
  { value: 'Russian', label: 'Russian' },
  // Add more languages as needed
];

const specializationOptions = [
  { value: 'Cardiology', label: 'Cardiology' },
  { value: 'Neurology', label: 'Neurology' },
  { value: 'Orthopedics', label: 'Orthopedics' },
  { value: 'Pediatrics', label: 'Pediatrics' },
  { value: 'Dermatology', label: 'Dermatology' },
  { value: 'Psychiatry', label: 'Psychiatry' },
  { value: 'Ophthalmology', label: 'Ophthalmology' },
  { value: 'Gynecology', label: 'Gynecology' },
  { value: 'Oncology', label: 'Oncology' },
  { value: 'Urology', label: 'Urology' },
  // Add more specializations as needed
];

const UpdateProfile = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    contactNumber: '',
    specialization: '',
    qualifications: '',
    experience: '',
    registrationNumber: '',
    languages: [],
    consultationStartTime: '',
    consultationEndTime: '',
    profilePicture: null,
    awards: '',
    research: '',
    socialLinks: ''
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

  const handleLanguagesChange = (selectedOptions) => {
    setFormData((prevData) => ({
      ...prevData,
      languages: selectedOptions ? selectedOptions.map(option => option.value) : []
    }));
  };

  const handleSpecializationChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      specialization: selectedOption ? selectedOption.value : ''
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
      <h2>Update Profile</h2>
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
          Specialization:
          <Select
            name="specialization"
            options={specializationOptions}
            className="basic-single-select"
            classNamePrefix="select"
            onChange={handleSpecializationChange}
            value={specializationOptions.find(option => option.value === formData.specialization)}
            required
          />
        </label>
        <label>
          Qualifications:
          <textarea name="qualifications" value={formData.qualifications} onChange={handleChange} required />
        </label>
        <label>
          Years of Experience:
          <input type="number" name="experience" value={formData.experience} onChange={handleChange} required />
        </label>
        <label>
          Registration Number:
          <input type="text" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} required />
        </label>
        <label>
          Languages Known:
          <Select
            isMulti
            name="languages"
            options={languagesOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={handleLanguagesChange}
            value={languagesOptions.filter(option => formData.languages.includes(option.value))}
          />
        </label>
        <label>
          Consultation Hours:
          <div className="time-picker-container">
            <input
              type="text"
              name="consultationStartTime"
              placeholder="From (e.g., 1000 hrs)"
              value={formData.consultationStartTime}
              onChange={handleChange}
              required
            />
            <span> to </span>
            <input
              type="text"
              name="consultationEndTime"
              placeholder="To (e.g., 1500 hrs)"
              value={formData.consultationEndTime}
              onChange={handleChange}
              required
            />
          </div>
        </label>
        <label>
          Profile Picture:
          <input type="file" name="profilePicture" onChange={handleChange} required />
        </label>
        <label>
          Awards & Achievements:
          <textarea name="awards" value={formData.awards} onChange={handleChange} required />
        </label>
        <label>
          Research/Publications:
          <textarea name="research" value={formData.research} onChange={handleChange} required />
        </label>
        <label>
          Social Media/Website Links:
          <textarea name="socialLinks" value={formData.socialLinks} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateProfile;