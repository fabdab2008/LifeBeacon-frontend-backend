import React, { useState } from 'react';
import './PrescriptionForm.css';

const PrescriptionForm = ({ appointment, closeModal }) => {
  const [diagnosis, setDiagnosis] = useState('');
  const [medicines, setMedicines] = useState([{ name: '', dose: { morning: false, noon: false, night: false } }]);
  const [tests, setTests] = useState(['']);
  const [followUp, setFollowUp] = useState('');

  const handleAddMedicine = () => {
    setMedicines([...medicines, { name: '', dose: { morning: false, noon: false, night: false } }]);
  };

  const handleMedicineChange = (index, field, value) => {
    const newMedicines = [...medicines];
    if (field === 'name') {
      newMedicines[index].name = value;
    } else {
      newMedicines[index].dose[field] = value;
    }
    setMedicines(newMedicines);
  };

  const handleDeleteMedicine = (index) => {
    const newMedicines = medicines.filter((_, i) => i !== index);
    setMedicines(newMedicines);
  };

  const handleAddTest = () => {
    setTests([...tests, '']);
  };

  const handleTestChange = (index, value) => {
    const newTests = [...tests];
    newTests[index] = value;
    setTests(newTests);
  };

  const handleDeleteTest = (index) => {
    const newTests = tests.filter((_, i) => i !== index);
    setTests(newTests);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ diagnosis, medicines, tests, followUp });
    closeModal();
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Prescription Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={appointment.name} readOnly className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="text" id="age" value={appointment.age} readOnly className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="problem">Problem</label>
          <input type="text" id="problem" value={appointment.problem} readOnly className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="diagnosis">Diagnosis</label>
          <input
            type="text"
            id="diagnosis"
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Prescribe Medicine</label>
          {medicines.map((medicine, index) => (
            <div key={index} className="medicine-group">
              <input
                type="text"
                value={medicine.name}
                onChange={(e) => handleMedicineChange(index, 'name', e.target.value)}
                required
                className="form-input"
              />
              <div className="dose-group">
                <label>
                  <input
                    type="checkbox"
                    checked={medicine.dose.morning}
                    onChange={(e) => handleMedicineChange(index, 'morning', e.target.checked)}
                  />
                  Morning
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={medicine.dose.noon}
                    onChange={(e) => handleMedicineChange(index, 'noon', e.target.checked)}
                  />
                  Noon
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={medicine.dose.night}
                    onChange={(e) => handleMedicineChange(index, 'night', e.target.checked)}
                  />
                  Night
                </label>
              </div>
              <button type="button" onClick={() => handleDeleteMedicine(index)} className="delete-button">Delete</button>
            </div>
          ))}
          <button type="button" onClick={handleAddMedicine} className="form-button">Add More</button>
        </div>
        <div className="form-group">
          <label>Test</label>
          {tests.map((test, index) => (
            <div key={index} className="test-group">
              <input
                type="text"
                value={test}
                onChange={(e) => handleTestChange(index, e.target.value)}
                className="form-input"
              />
              <button type="button" onClick={() => handleDeleteTest(index)} className="delete-button">Delete</button>
            </div>
          ))}
          <button type="button" onClick={handleAddTest} className="form-button">Add More</button>
        </div>
        <div className="form-group">
          <label htmlFor="followUp">Follow Up</label>
          <input
            type="date"
            id="followUp"
            value={followUp}
            onChange={(e) => setFollowUp(e.target.value)}
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
};

export default PrescriptionForm;