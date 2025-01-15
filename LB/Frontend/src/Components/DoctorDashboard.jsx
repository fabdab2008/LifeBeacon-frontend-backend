import React, { useState } from 'react';
import { FaTachometerAlt, FaCalendarCheck, FaPrescriptionBottle, FaBell, FaUserEdit, FaSignOutAlt, FaSearch, FaIdCard, FaUser, FaStethoscope, FaBirthdayCake, FaPrescription, FaTimes } from 'react-icons/fa';
import backgroundVideo from '../assets/Images/hos.mp4';
import logo from '../assets/Images/logo.png';
import profilePic from '../assets/Images/pran.jpeg';
import UpdateProfile from './UpdateProfile';
import PrescriptionForm from './PrescriptionForm';
import PatientHistory from './PatientHistory';
import './DoctorDashboard.css';

const DoctorDashboard = () => {
  const [isUpdateProfileOpen, setIsUpdateProfileOpen] = useState(false);
  const [showAppointments, setShowAppointments] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isPrescriptionFormOpen, setIsPrescriptionFormOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New appointment request from Rahim Uddin', time: '10:30 AM' },
    { id: 2, message: 'New appointment request from Karim Ahmed', time: '11:00 AM' },
    { id: 3, message: 'New appointment request from Abdul Latif', time: '11:30 AM' },
    { id: 4, message: 'New appointment request from Fatema Begum', time: '12:00 PM' },
    { id: 5, message: 'New appointment request from Shakib Al Hasan', time: '12:30 PM' },
    { id: 6, message: 'New appointment request from Nusrat Jahan', time: '01:00 PM' },
    { id: 7, message: 'New appointment request from Ayesha Siddiqua', time: '01:30 PM' },
    { id: 8, message: 'New appointment request from Mizanur Rahman', time: '02:00 PM' },
    { id: 9, message: 'New appointment request from Rafiqul Islam', time: '02:30 PM' },
    { id: 10, message: 'New appointment request from Salma Khatun', time: '03:00 PM' }
  ]);

  const handleLogout = () => {
    window.location.href = '/';
  };

  const handleUpdateProfile = () => {
    setIsUpdateProfileOpen(true);
  };

  const closeUpdateProfile = () => {
    setIsUpdateProfileOpen(false);
  };

  const handleShowAppointments = () => {
    setShowAppointments(true);
  };

  const handleHideAppointments = () => {
    setShowAppointments(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePrescribe = (appointment) => {
    setSelectedAppointment(appointment);
    setIsPrescriptionFormOpen(true);
  };

  const closePrescriptionForm = () => {
    setIsPrescriptionFormOpen(false);
    setSelectedAppointment(null);
  };

  const handleShowNotifications = () => {
    setShowNotifications(true);
  };

  const handleHideNotifications = () => {
    setShowNotifications(false);
  };

  const appointments = [
    { nid: '123456789', name: 'Rahim Uddin', problem: 'Flu with high fever', age: 30 },
    { nid: '987654321', name: 'Karim Ahmed', problem: 'Severe headache and dizziness', age: 25 },
    { nid: '456789123', name: 'Abdul Latif', problem: 'Chronic back pain', age: 45 },
    { nid: '789123456', name: 'Fatema Begum', problem: 'Seasonal allergy with rash', age: 35 },
    { nid: '321654987', name: 'Shakib Al Hasan', problem: 'Type 2 diabetes with complications', age: 50 },
    { nid: '654321987', name: 'Nusrat Jahan', problem: 'Asthma with breathing difficulty', age: 28 },
    { nid: '147258369', name: 'Ayesha Siddiqua', problem: 'Hypertension', age: 40 },
    { nid: '963852741', name: 'Mizanur Rahman', problem: 'Arthritis', age: 55 },
    { nid: '852741963', name: 'Rafiqul Islam', problem: 'Migraine', age: 33 },
    { nid: '741963852', name: 'Salma Khatun', problem: 'Gastric ulcer', age: 29 },
    { nid: '369258147', name: 'Jamal Uddin', problem: 'Kidney stones', age: 48 },
    { nid: '258147369', name: 'Farida Begum', problem: 'Thyroid disorder', age: 37 },
    { nid: '159753486', name: 'Mahmudul Hasan', problem: 'Heart disease', age: 60 },
    { nid: '753486159', name: 'Rokeya Begum', problem: 'Skin infection', age: 32 },
    { nid: '486159753', name: 'Minhazul Arefin', problem: 'Taare Zameen Paar', age: 24 }
  ];

  const filteredAppointments = appointments.filter(appointment =>
    appointment.nid.includes(searchTerm)
  );

  const patientHistory = {
    recentDisease: 'Flu',
    allergicReaction: 'Peanuts',
    vaccinationDetails: 'COVID-19, Influenza',
    pregnancyStatus: 'Not Pregnant'
  };

  return (
    <div className="doctor-dashboard">
      <img src={logo} alt="LifeBeacon Logo" className="logo" />
      <aside className="sidebar">
        <div className="user-info">
          <img src={profilePic} alt="Doctor Profile" className="profile-pic" />
          <h2>Welcome, Dr. Pran Gopal Dutta</h2>
        </div>
        <nav className="menu">
          <ul>
            <li><FaTachometerAlt className="icon" /> Dashboard</li>
            <li onClick={handleShowAppointments}><FaCalendarCheck className="icon" /> Appointment</li>
            <li onClick={handleShowNotifications}><FaBell className="icon" /> Notifications</li>
            <li onClick={handleUpdateProfile}><FaUserEdit className="icon" /> Update Profile</li>
            <li onClick={handleLogout}><FaSignOutAlt className="icon" /> Logout</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <video autoPlay loop muted className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {showAppointments && (
          <div className="appointments-table">
            <div className="appointments-header">
              <h2>Appointment Request</h2>
              <FaTimes className="exit-icon" onClick={handleHideAppointments} />
            </div>
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search by NID"
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
              />
            </div>
            <table>
              <thead>
                <tr>
                  <th><FaIdCard /> NID</th>
                  <th><FaUser /> Name</th>
                  <th><FaStethoscope /> Problem</th>
                  <th><FaBirthdayCake /> Age</th>
                  <th><FaPrescription /> Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredAppointments.map((appointment, index) => (
                  <tr key={index}>
                    <td>{appointment.nid}</td>
                    <td>{appointment.name}</td>
                    <td>{appointment.problem}</td>
                    <td>{appointment.age}</td>
                    <td><button className="prescribe-button" onClick={() => handlePrescribe(appointment)}>PRESCRIBE</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {showNotifications && (
          <div className="notifications">
            <div className="notifications-header">
              <h2>Notifications</h2>
              <FaTimes className="exit-icon" onClick={handleHideNotifications} />
            </div>
            <ul className="notifications-list">
              {notifications.map(notification => (
                <li key={notification.id} className="notification-item">
                  <span className="notification-message">{notification.message}</span>
                  <span className="notification-time">{notification.time}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {isPrescriptionFormOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closePrescriptionForm}>&times;</span>
              <div className="prescription-container">
                <PrescriptionForm appointment={selectedAppointment} closeModal={closePrescriptionForm} />
                <PatientHistory patientHistory={patientHistory} />
              </div>
            </div>
          </div>
        )}
        {isUpdateProfileOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeUpdateProfile}>&times;</span>
              <UpdateProfile closeModal={closeUpdateProfile} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default DoctorDashboard;