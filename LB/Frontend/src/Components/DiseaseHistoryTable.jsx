import React, { useState } from 'react';
import './DiseaseHistoryTable.css';

const DiseaseHistoryTable = ({ closeModal }) => {
  const [searchTerm, setSearchTerm] = useState('');

const diseaseHistory = [
    {
        date: '2005-03-15',
        diagnosis: 'Chickenpox',
        medicineDose: 'Calamine Lotion: As needed',
        testReport: 'Visual Diagnosis',
        followUp: '2005-03-25',
        doctor: 'Dr. Rahman',
        hospital: 'Dhaka Medical College'
    },
    {
        date: '2008-11-20',
        diagnosis: 'Common Cold',
        medicineDose: 'Paracetamol: Morning+Night (5 Days)',
        testReport: 'None',
        followUp: '2008-11-25',
        doctor: 'Dr. Karim',
        hospital: 'Square Hospital'
    },
    {
        date: '2010-05-10',
        diagnosis: 'Stomach Flu',
        medicineDose: 'ORS: As needed',
        testReport: 'None',
        followUp: '2010-05-15',
        doctor: 'Dr. Islam',
        hospital: 'Apollo Hospital'
    },
    {
        date: '2012-09-05',
        diagnosis: 'Ear Infection',
        medicineDose: 'Amoxicillin: Morning+Night (7 Days)',
        testReport: 'Ear Swab Test',
        followUp: '2012-09-12',
        doctor: 'Dr. Chowdhury',
        hospital: 'United Hospital'
    },
    {
        date: '2015-01-18',
        diagnosis: 'Seasonal Flu',
        medicineDose: 'Paracetamol: Morning+Noon+Night (5 Days)',
        testReport: 'None',
        followUp: '2015-01-23',
        doctor: 'Dr. Hossain',
        hospital: 'Ibn Sina Hospital'
    },
    {
        date: '2017-06-25',
        diagnosis: 'Food Poisoning',
        medicineDose: 'ORS: As needed',
        testReport: 'Stool Test',
        followUp: '2017-06-30',
        doctor: 'Dr. Ahmed',
        hospital: 'LabAid Hospital'
    },
    {
        date: '2019-03-10',
        diagnosis: 'Sinusitis',
        medicineDose: 'Decongestant: As needed',
        testReport: 'Sinus X-Ray',
        followUp: '2019-03-17',
        doctor: 'Dr. Khan',
        hospital: 'Popular Diagnostic Center'
    },
    {
        date: '2021-08-15',
        diagnosis: 'Allergic Rhinitis',
        medicineDose: 'Cetirizine: Night (10 Days)',
        testReport: 'Allergy Test',
        followUp: '2021-08-25',
        doctor: 'Dr. Siddiqui',
        hospital: 'National Institute of Diseases of the Chest and Hospital'
    },
    {
        date: '2022-12-01',
        diagnosis: 'Tonsillitis',
        medicineDose: 'Amoxicillin: Morning+Night (7 Days)',
        testReport: 'Throat Swab Test',
        followUp: '2022-12-08',
        doctor: 'Dr. Ali',
        hospital: 'Kurmitola General Hospital'
    },
    {
        date: '2023-07-01',
        diagnosis: 'Mild Fever',
        medicineDose: 'Paracetamol: Morning+Noon+Night (3 Days)',
        testReport: 'None',
        followUp: '2023-07-04',
        doctor: 'Dr. Hasan',
        hospital: 'Holy Family Red Crescent Medical College Hospital'
    }
];

  // Sort the disease history by date in descending order
  const sortedHistory = diseaseHistory.sort((a, b) => new Date(b.date) - new Date(a.date));

  const filteredHistory = sortedHistory.filter(item =>
    Object.values(item).some(val =>
      val.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="disease-history-table">
      <h2>Disease History</h2>
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Diagnosis</th>
            <th>Medicine and Dose</th>
            <th>Test Report</th>
            <th>Follow Up</th>
            <th>Consulting Doctor</th>
            <th>Hospital</th>
          </tr>
        </thead>
        <tbody>
          {filteredHistory.map((record, index) => (
            <tr key={index}>
              <td>{record.date}</td>
              <td>{record.diagnosis}</td>
              <td>{record.medicineDose}</td>
              <td>{record.testReport}</td>
              <td>{record.followUp}</td>
              <td>{record.doctor}</td>
              <td>{record.hospital}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default DiseaseHistoryTable;