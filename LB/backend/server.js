require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connectDB = require('./config/db'); // Import the connectDB function

// Import routes
const doctorRoutes = require('./routes/doctorRoutes');
const patientRoutes = require('./routes/patientRoutes');
const hospitalRoutes = require('./routes/hospitalRoutes');

// Import Schema
const Doctor = require('./DB/DoctorSchema');
const Patient = require('./DB/PatientSchema');
const Hospital = require('./DB/HospitalSchema');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/doctors', doctorRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/hospitals', hospitalRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Lifebeacon Backend System');
});

// Login route
app.post('/api/login', async (req, res) => {
  const { NID, password, userType } = req.body;
  let user;
  if (userType === 'doctor') {
    user = await Doctor.findOne({ NID });
  } else if (userType === 'patient') {
    user = await Patient.findOne({ NID });
  } else if (userType === 'hospital') {
    user = await Hospital.findOne({ NID });
  }
  if (!user) {
    return res.status(404).send({ message: 'User not found' });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).send({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.send({ token, message: 'Login successful' });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));