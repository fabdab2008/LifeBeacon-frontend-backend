const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  NID: { type: Number, required: true, unique: true },
  Password: { type: String, required: true },
  PhoneNumber: { type: Number },
  Email: { type: String, required: true }
});

module.exports = mongoose.model('Doctor', doctorSchema);