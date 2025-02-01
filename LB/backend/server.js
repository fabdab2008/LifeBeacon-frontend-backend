const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Load environment variables
dotenv.config();

// Import routes
const doctorRoutes = require('./routes/doctorRoutes');
const patientRoutes = require('./routes/patientRoutes');
const hospitalRoutes = require('./routes/hospitalRoutes');

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

// Routes
app.use('/api/doctors', doctorRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/hospitals', hospitalRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Lifebeacon Backend System');
});



// Login route
app.post('/login', async (req, res) => {
  const { NID, password } = req.body;
  const doctor = await Doctor.findOne({ NID, password });
  if (doctor) {
    res.status(200).send({ message: 'Login successful', doctor });
  } else {
    res.status(401).send({ message: 'Invalid credentials' });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
