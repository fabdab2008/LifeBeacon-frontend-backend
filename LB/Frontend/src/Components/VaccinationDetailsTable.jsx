import React, { useState } from 'react';
import './RequestAppointmentTable.css'; // Reuse the same CSS

const VaccinationDetailsTable = ({ openForm }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [vaccinations, setVaccinations] = useState([
    { id: 1, name: 'COVID-19', date: '2021-01-01', institution: 'Health Center', doses: 2 },
    { id: 2, name: 'Flu', date: '2020-10-15', institution: 'Clinic', doses: 1 },
    // Add more initial data if needed
  { id: 3, name: 'Hepatitis B', date: '2021-02-01', institution: 'Pediatric Clinic', doses: 3 },
  { id: 4, name: 'Rotavirus', date: '2021-03-01', institution: 'Pediatric Clinic', doses: 2 },
  { id: 5, name: 'Diphtheria, Tetanus, and Pertussis (DTaP)', date: '2021-04-01', institution: 'Pediatric Clinic', doses: 5 },
  { id: 6, name: 'Haemophilus influenzae type b (Hib)', date: '2021-05-01', institution: 'Pediatric Clinic', doses: 4 },
  { id: 7, name: 'Pneumococcal conjugate', date: '2021-06-01', institution: 'Pediatric Clinic', doses: 4 },
  ]);

  const filteredVaccinations = vaccinations.filter(vaccination =>
    vaccination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vaccination.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vaccination.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vaccination.doses.toString().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="request-appointment-table">
      <h2>Vaccination Details</h2>
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
            <th>Vaccine Name</th>
            <th>Date</th>
            <th>Institution Name</th>
            <th>No of Doses Taken</th>
          </tr>
        </thead>
        <tbody>
          {filteredVaccinations.map((vaccination) => (
            <tr key={vaccination.id}>
              <td>{vaccination.name}</td>
              <td>{vaccination.date}</td>
              <td>{vaccination.institution}</td>
              <td>{vaccination.doses}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={openForm}>Add More Vaccine</button>
    </div>
  );
};

export default VaccinationDetailsTable;