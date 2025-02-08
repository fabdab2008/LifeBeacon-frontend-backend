const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  NID: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "Patient" },
  profilePicture: { type: String },
  fullName: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  contactNumber: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  allergicReaction: { type: String },
  specialConsiderations: { type: String },
  pregnancyStatus: { type: String }
});

const Patient = mongoose.model("Patient", PatientSchema);
module.exports = Patient;
