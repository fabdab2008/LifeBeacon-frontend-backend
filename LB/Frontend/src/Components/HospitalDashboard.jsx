import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HospitalDashboard.css';
import logo from '../assets/Images/logo.png';
import squareLogo from '../assets/Images/squarelogo.png'; // Import the square logo
import videoSrc from '../assets/Images/HospitalDashboard.mp4'; // Import the video file

const HospitalDashboard = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const [patientProfile, setPatientProfile] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [pendingRequests, setPendingRequests] = useState([]);
  const [doctorName, setDoctorName] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [patientNid, setPatientNid] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [units, setUnits] = useState('');
  const [requestDate, setRequestDate] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    if (option === 'Sign Out') {
      navigate('/'); // Navigate to the home page
    } else {
      setSelectedOption(option);
      setPatientProfile(null); // Reset patient profile when option changes
    }
  };

  const handleCloseForm = () => {
    setSelectedOption('');
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setSearchInput(value);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput) {
      setRecentSearches([...recentSearches, searchInput]);
      // Simulate fetching patient profile
      setPatientProfile({ nid: searchInput, name: 'John Doe', reports: [] });
      setSearchInput('');
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPatientProfile({
        ...patientProfile,
        reports: [...patientProfile.reports, file.name],
      });
    }
  };

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    // Simulate fetching pending requests for the selected date
    setPendingRequests([
      { id: '123', name: 'Patient A', doctor: 'Dr. Smith', proposedDate: '2023-10-01 10:00 AM' },
      { id: '456', name: 'Patient B', doctor: 'Dr. Johnson', proposedDate: '2023-10-01 11:00 AM' },
    ]);
  };

  const handleAssign = (id) => {
    // Handle assigning the patient
    console.log(`Assigned patient with ID: ${id}`);
  };

  const handleReject = (id) => {
    // Handle rejecting the patient
    console.log(`Rejected patient with ID: ${id}`);
  };

  const padNID = (nid) => {
    return nid.toString().padStart(10, '0');
  };

  const handleScheduleSubmit = (e) => {
    e.preventDefault();
    // Handle schedule submission
    console.log(`Scheduled for Dr. ${doctorName} on ${scheduleDate} at ${scheduleTime} for patient NID ${patientNid}`);
  };

  const handleBloodRequestSubmit = (e) => {
    e.preventDefault();
    // Handle blood request submission
    console.log(`Requested ${units} units of ${bloodType} blood on ${requestDate} with status ${status}`);
  };

  return (
    <div className="dashboard-container">
      <video className="dashboard-video" src={videoSrc} autoPlay loop muted />
      <header className="dashboard-header">
        <img src={logo} alt="Logo" className="dashboard-logo" />
        <img src={squareLogo} alt="Square Logo" className="top-right-logo" /> {/* Add the square logo */}
        <h1>Hospital Dashboard</h1>
      </header>
      <aside className="dashboard-sidebar">
        <ul>
          <li onClick={() => handleOptionClick('Diagnosis Report')}>Diagnosis Report</li>
          <li onClick={() => handleOptionClick('Doctors Appointment')}>Doctors Appointment</li>
          <li onClick={() => handleOptionClick('Give Schedule')}>Give Schedule</li>
          <li onClick={() => handleOptionClick('Request Blood')}>Request Blood</li> {/* Add this line */}
          <li onClick={() => handleOptionClick('Sign Out')}>Sign Out</li>
        </ul>
      </aside>
      <main className="dashboard-main">
        {selectedOption === 'Diagnosis Report' && (
          <div className="diagnosis-report">
            <button className="close-button" onClick={handleCloseForm}>×</button>
            <h2>Diagnosis Report</h2>
            <form onSubmit={handleSearchSubmit} className="search-form">
              <input
                type="text"
                value={searchInput}
                onChange={handleSearchChange}
                placeholder="Enter NID number"
                className="search-input"
              />
              <button type="submit" className="search-button">Search</button>
            </form>
            {recentSearches.length > 0 && (
              <div className="recent-searches">
                <h2>Recent Searches</h2>
                <ul>
                  {recentSearches.map((search, index) => (
                    <li key={index}>{search}</li>
                  ))}
                </ul>
              </div>
            )}
            {patientProfile && (
              <div className="patient-profile">
                <h2>Patient Profile</h2>
                <p>NID: {padNID(patientProfile.nid)}</p>
                <p>Name: {patientProfile.name}</p>
                <div className="upload-section">
                  <label htmlFor="file-upload" className="upload-label">Upload Report (PDF):</label>
                  <input
                    type="file"
                    id="file-upload"
                    accept="application/pdf"
                    onChange={handleFileUpload}
                    className="upload-input"
                  />
                </div>
                {patientProfile.reports.length > 0 && (
                  <div className="reports">
                    <h3>Uploaded Reports</h3>
                    <ul>
                      {patientProfile.reports.map((report, index) => (
                        <li key={index}>{report}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        {selectedOption === 'Doctors Appointment' && (
          <div className="doctors-appointment">
            <button className="close-button" onClick={handleCloseForm}>×</button>
            <h2>Pending Requests</h2>
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="date-picker"
            />
            {pendingRequests.length > 0 && (
              <table className="requests-table">
                <thead>
                  <tr>
                    <th>NID</th>
                    <th>Patient Name</th>
                    <th>Doctor's Name</th>
                    <th>Proposed Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingRequests.map((request) => (
                    <tr key={request.id}>
                      <td>{padNID(request.id)}</td>
                      <td>{request.name}</td>
                      <td>{request.doctor}</td>
                      <td>{request.proposedDate}</td>
                      <td>
                        <button onClick={() => handleAssign(request.id)} className="assign-button">Assign</button>
                        <button onClick={() => handleReject(request.id)} className="reject-button">Reject</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
        {selectedOption === 'Give Schedule' && (
          <div className="give-schedule">
            <button className="close-button" onClick={handleCloseForm}>×</button>
            <h2>Give Schedule</h2>
            <form onSubmit={handleScheduleSubmit} className="schedule-form">
              <div className="form-group">
                <label htmlFor="doctor-name">Doctor Name</label>
                <select
                  id="doctor-name"
                  value={doctorName}
                  onChange={(e) => setDoctorName(e.target.value)}
                  className="form-control"
                >
                  <option value="">Select Doctor</option>
                  <option value="Dr. Smith">Dr. Smith</option>
                  <option value="Dr. Johnson">Dr. Johnson</option>
                  <option value="Dr. Brown">Dr. Brown</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="schedule-date">Select Date</label>
                <input
                  type="date"
                  id="schedule-date"
                  value={scheduleDate}
                  onChange={(e) => setScheduleDate(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="schedule-time">Select Time</label>
                <input
                  type="time"
                  id="schedule-time"
                  value={scheduleTime}
                  onChange={(e) => setScheduleTime(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="patient-nid">Patient NID No</label>
                <input
                  type="number"
                  id="patient-nid"
                  value={patientNid}
                  onChange={(e) => setPatientNid(e.target.value)}
                  className="form-control"
                />
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        )}
        {selectedOption === 'Request Blood' && (
          <div className="request-blood">
            <button className="close-button" onClick={handleCloseForm}>×</button>
            <h2>Request Blood</h2>
            <form onSubmit={handleBloodRequestSubmit} className="blood-request-form">
              <div className="form-group">
                <label htmlFor="blood-type">Blood Type</label>
                <select
                  id="blood-type"
                  value={bloodType}
                  onChange={(e) => setBloodType(e.target.value)}
                  className="form-control"
                >
                  <option value="">Select Blood Type</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="units">Units</label>
                <input
                  type="number"
                  id="units"
                  value={units}
                  onChange={(e) => setUnits(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="request-date">Date</label>
                <input
                  type="date"
                  id="request-date"
                  value={requestDate}
                  onChange={(e) => setRequestDate(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="status">Status</label>
                <select
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="form-control"
                >
                  <option value="">Select Status</option>
                  <option value="Urgent">Urgent</option>
                  <option value="Regular">Regular</option>
                  <option value="Blood Bank">Blood Bank</option>
                </select>
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        )}
        {selectedOption === 'Sign Out' && (
          <div className="sign-out">
            <h2>Sign Out</h2>
            {/* Add your Sign Out content here */}
          </div>
        )}
      </main>
    </div>
  );
};

export default HospitalDashboard;