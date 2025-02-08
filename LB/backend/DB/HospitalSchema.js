const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  NID: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  role: { 
    type: String, 
    default: "Hospital" 
  },
  licenseNumber: {
    type: String,
    required: true
  },
  address: {
    street: String,
    city: String,
    country: String
  },
  departments: [String],
  staff: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor'
  }],
  bedCapacity: Number
});

module.exports = mongoose.model('Hospital', hospitalSchema);