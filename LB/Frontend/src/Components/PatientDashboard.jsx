import React, { useState } from 'react';
import { FaTachometerAlt, FaHistory, FaSyringe, FaCalendarCheck, FaHeart, FaBell, FaUserEdit, FaSignOutAlt, FaTimes } from 'react-icons/fa';
import backgroundVideo from '../assets/Images/pat.mp4';
import logo from '../assets/Images/logo.png';
import profilePic from '../assets/Images/farhan.jpg';
import UpdatePatientInfo from './UpdatePatientInfo';
import DonateBloodTable from './DonateBloodTable';
import RequestAppointmentTable from './RequestAppointmentTable';
import AppointmentForm from './AppointmentForm';
import VaccinationDetailsTable from './VaccinationDetailsTable';
import VaccinationForm from './VaccinationForm';
import DiseaseHistoryTable from './DiseaseHistoryTable';
import './DoctorDashboard.css'; // Reuse the same CSS
import './VaccinationDetailsTable.css'; // New CSS file
import './VaccinationForm.css'; // New CSS file
import './DiseaseHistoryTable.css'; // New CSS file

const PatientDashboard = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [isUpdateInfoOpen, setIsUpdateInfoOpen] = useState(false);
  const [isDonateBloodOpen, setIsDonateBloodOpen] = useState(false);
  const [isRequestAppointmentOpen, setIsRequestAppointmentOpen] = useState(false);
  const [isAppointmentFormOpen, setIsAppointmentFormOpen] = useState(false);
  const [isVaccinationDetailsOpen, setIsVaccinationDetailsOpen] = useState(false);
  const [isVaccinationFormOpen, setIsVaccinationFormOpen] = useState(false);
  const [isDiseaseHistoryOpen, setIsDiseaseHistoryOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New vaccination update available', time: '10:30 AM' },
    { id: 2, message: 'Appointment confirmed with Dr. Smith', time: '11:00 AM' },
  ]);

  const handleLogout = () => {
    window.location.href = '/';
  };

  const handleShowNotifications = () => {
    setShowNotifications(true);
  };

  const handleHideNotifications = () => {
    setShowNotifications(false);
  };

  const handleUpdateInfo = () => {
    setIsUpdateInfoOpen(true);
  };

  const closeUpdateInfo = () => {
    setIsUpdateInfoOpen(false);
  };

  const handleDonateBlood = () => {
    setIsDonateBloodOpen(true);
  };

  const closeDonateBlood = () => {
    setIsDonateBloodOpen(false);
  };

  const handleRequestAppointment = () => {
    setIsRequestAppointmentOpen(true);
  };

  const closeRequestAppointment = () => {
    setIsRequestAppointmentOpen(false);
  };

  const openAppointmentForm = (appointment) => {
    setSelectedAppointment(appointment);
    setIsAppointmentFormOpen(true);
  };

  const closeAppointmentForm = () => {
    setIsAppointmentFormOpen(false);
  };

  const handleVaccinationDetails = () => {
    setIsVaccinationDetailsOpen(true);
  };

  const closeVaccinationDetails = () => {
    setIsVaccinationDetailsOpen(false);
  };

  const openVaccinationForm = () => {
    setIsVaccinationFormOpen(true);
  };

  const closeVaccinationForm = () => {
    setIsVaccinationFormOpen(false);
  };

  const handleDiseaseHistory = () => {
    setIsDiseaseHistoryOpen(true);
  };

  const closeDiseaseHistory = () => {
    setIsDiseaseHistoryOpen(false);
  };

  const addVaccination = (vaccination) => {
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      { id: prevNotifications.length + 1, message: `New vaccination added: ${vaccination.name}`, time: new Date().toLocaleTimeString() }
    ]);
  };

  return (
    <div className="doctor-dashboard">
      <img src={logo} alt="LifeBeacon Logo" className="logo" />
      <aside className="sidebar">
        <div className="user-info">
          <img src={profilePic} alt="Patient Profile" className="profile-pic" />
          <h2>Welcome, Farhan Shahriar</h2>
        </div>
        <nav className="menu">
          <ul>
            <li><FaTachometerAlt className="icon" /> Dashboard</li>
            <li onClick={handleDiseaseHistory}><FaHistory className="icon" /> Disease History</li>
            <li onClick={handleVaccinationDetails}><FaSyringe className="icon" /> Vaccination Details</li>
            <li onClick={handleRequestAppointment}><FaCalendarCheck className="icon" /> Request Appointment</li>
            <li onClick={handleDonateBlood}><FaHeart className="icon" /> Donate Blood</li>
            <li onClick={handleShowNotifications}><FaBell className="icon" /> Notifications</li>
            <li onClick={handleUpdateInfo}><FaUserEdit className="icon" /> Update Personal Info</li>
            <li onClick={handleLogout}><FaSignOutAlt className="icon" /> Logout</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <video autoPlay loop muted className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
        {isUpdateInfoOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeUpdateInfo}>&times;</span>
              <UpdatePatientInfo closeModal={closeUpdateInfo} />
            </div>
          </div>
        )}
        {isDonateBloodOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeDonateBlood}>&times;</span>
              <DonateBloodTable closeModal={closeDonateBlood} />
            </div>
          </div>
        )}
        {isRequestAppointmentOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeRequestAppointment}>&times;</span>
              <RequestAppointmentTable openForm={openAppointmentForm} />
            </div>
          </div>
        )}
        {isAppointmentFormOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeAppointmentForm}>&times;</span>
              <AppointmentForm appointment={selectedAppointment} closeModal={closeAppointmentForm} />
            </div>
          </div>
        )}
        {isVaccinationDetailsOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeVaccinationDetails}>&times;</span>
              <VaccinationDetailsTable openForm={openVaccinationForm} />
            </div>
          </div>
        )}
        {isVaccinationFormOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeVaccinationForm}>&times;</span>
              <VaccinationForm addVaccination={addVaccination} closeModal={closeVaccinationForm} />
            </div>
          </div>
        )}
        {isDiseaseHistoryOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeDiseaseHistory}>&times;</span>
              <DiseaseHistoryTable closeModal={closeDiseaseHistory} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default PatientDashboard;