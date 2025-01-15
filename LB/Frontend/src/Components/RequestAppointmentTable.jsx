import React, { useState } from 'react';
import './RequestAppointmentTable.css';

const RequestAppointmentTable = ({ openForm }) => {
  const [searchTerm, setSearchTerm] = useState('');
const [appointments] = useState([
    { id: 1, hospital: 'Dhaka Medical College Hospital', doctor: 'Dr. parvin', specialization: 'Cardiology', time: '10:00 AM - 12:00 PM' },
    { id: 2, hospital: 'Square Hospital', doctor: 'Dr. Kamrul', specialization: 'Neurology', time: '1:00 PM - 3:00 PM' },
    { id: 3, hospital: 'Apollo Hospital', doctor: 'Dr. Rahman', specialization: 'Orthopedics', time: '9:00 AM - 11:00 AM' },
    { id: 4, hospital: 'United Hospital', doctor: 'Dr. Karim', specialization: 'Dermatology', time: '2:00 PM - 4:00 PM' },
    { id: 5, hospital: 'LabAid Hospital', doctor: 'Dr. Hasan', specialization: 'Pediatrics', time: '11:00 AM - 1:00 PM' },
    { id: 6, hospital: 'Ibn Sina Hospital', doctor: 'Dr. Chowdhury', specialization: 'Gastroenterology', time: '3:00 PM - 5:00 PM' },
    { id: 7, hospital: 'Popular Diagnostic Center', doctor: 'Dr. Islam', specialization: 'Nephrology', time: '10:00 AM - 12:00 PM' },
    { id: 8, hospital: 'Holy Family Red Crescent Medical College Hospital', doctor: 'Dr. Akter', specialization: 'Oncology', time: '1:00 PM - 3:00 PM' },
    { id: 9, hospital: 'BIRDEM General Hospital', doctor: 'Dr. Hossain', specialization: 'Endocrinology', time: '9:00 AM - 11:00 AM' },
    { id: 10, hospital: 'National Heart Foundation Hospital', doctor: 'Dr. Alam', specialization: 'Cardiology', time: '2:00 PM - 4:00 PM' },
    { id: 11, hospital: 'Bangabandhu Sheikh Mujib Medical University', doctor: 'Dr. Khan', specialization: 'Neurology', time: '11:00 AM - 1:00 PM' },
    { id: 12, hospital: 'Sir Salimullah Medical College & Mitford Hospital', doctor: 'Dr. Siddique', specialization: 'Hematology', time: '3:00 PM - 5:00 PM' }
]);

  const filteredAppointments = appointments.filter(appointment =>
    appointment.hospital.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.time.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="request-appointment-table">
      <h2>Request Appointment</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <table>
        <thead>
          <tr>
            <th>Hospital Name</th>
            <th>Doctor</th>
            <th>Specializations</th>
            <th>Available Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.hospital}</td>
              <td>{appointment.doctor}</td>
              <td>{appointment.specialization}</td>
              <td>{appointment.time}</td>
              <td>
                <button onClick={() => openForm(appointment)}>Proceed</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestAppointmentTable;