import React, { useState } from 'react';
import './DonateBloodTable.css';

const DonateBloodTable = ({ closeModal }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const bloodRequests = [
    { id: 1, date: '2023-10-01', bloodType: 'A+', status: 'Urgent', hospital: 'Dhaka Medical College Hospital' },
    { id: 2, date: '2023-10-02', bloodType: 'B-', status: 'Regular', hospital: 'Square Hospital' },
    { id: 3, date: '2023-10-03', bloodType: 'O+', status: 'Blood Bank', hospital: 'Apollo Hospital Dhaka' },
    // Add more rows as needed
    { id: 4, date: '2023-10-04', bloodType: 'AB-', status: 'Urgent', hospital: 'Labaid Hospital' },
    { id: 5, date: '2023-10-05', bloodType: 'A-', status: 'Regular', hospital: 'Ibn Sina Hospital' },
    { id: 6, date: '2023-10-06', bloodType: 'B+', status: 'Blood Bank', hospital: 'United Hospital' },
    { id: 7, date: '2023-10-07', bloodType: 'O-', status: 'Urgent', hospital: 'Bangabandhu Sheikh Mujib Medical University' },
    {id: 8, date: '2023-10-08', bloodType: 'AB+', status: 'Regular', hospital: 'Bangladesh Medical College Hospital'}
  ];

  const handleApply = (id) => {
    setSelectedRow(id);
  };

  const handleConfirm = () => {
    // Handle confirmation logic here
    console.log(`Confirmed for row ${selectedRow} on ${date} at ${time}`);
    closeModal();
  };

  return (
    <div className="donate-blood-table">
      <h2>Donate Blood</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Blood Type</th>
            <th>Status</th>
            <th>Hospital Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bloodRequests.map((request) => (
            <tr key={request.id}>
              <td>{request.date}</td>
              <td>{request.bloodType}</td>
              <td>{request.status}</td>
              <td>{request.hospital}</td>
              <td>
                <button onClick={() => handleApply(request.id)}>Apply</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedRow && (
        <div className="confirmation-modal">
          <h3>Confirm Donation</h3>
          <label>
            Suitable Date:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </label>
          <label>
            Suitable Time:
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
          </label>
          <button onClick={handleConfirm}>Confirm</button>
          <button onClick={() => setSelectedRow(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default DonateBloodTable;