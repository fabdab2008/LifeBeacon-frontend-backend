const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  nationalId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  dateOfBirth: Date,
  medicalHistory: [String],
  currentMedications: [String],
  primaryPhysician: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor'
  },
  registeredHospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital'
  }
});

module.exports = mongoose.model('Patient', patientSchema);