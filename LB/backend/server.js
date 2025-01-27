const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
  // No need to include useNewUrlParser or useUnifiedTopology
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Example route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Start server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
