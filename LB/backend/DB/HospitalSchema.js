const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
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