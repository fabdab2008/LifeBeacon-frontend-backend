import React from 'react';
import './PatientHistory.css';

const PatientHistory = ({ patientHistory }) => {
  return (
    <div className="patient-history">
      <h2>Patient History</h2>
      <p><strong>Recent Disease:</strong> {patientHistory.recentDisease}</p>
      <p><strong>Allergic Reaction:</strong> {patientHistory.allergicReaction}</p>
      <p><strong>Vaccination Details:</strong> {patientHistory.vaccinationDetails}</p>
      <p><strong>Pregnancy Status:</strong> {patientHistory.pregnancyStatus}</p>
    </div>
  );
};

export default PatientHistory;