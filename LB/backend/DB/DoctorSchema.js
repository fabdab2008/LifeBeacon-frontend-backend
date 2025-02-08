const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
  NID: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "Doctor" },
  profilePicture: { type: String },
  fullName: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  contactNumber: { type: String, required: true },
  specialization: { type: String, required: true },
  qualifications: { type: String, required: true },
  experience: { type: String, required: true },
  registrationNumber: { type: String, required: true },
  languages: { type: [String], required: true },
  consultationStartTime: { type: String, required: true },
  consultationEndTime: { type: String, required: true },
  awards: { type: String },
  research: { type: String },
  socialLinks: { type: String },
});

const Doctor = mongoose.model("Doctor", DoctorSchema);
module.exports = Doctor;
