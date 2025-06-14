const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Import routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const retailerRoutes = require('./routes/retailerRoutes');
const sustainabilityRoutes = require('./routes/sustainabilityRoutes');

// API routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/retailers', retailerRoutes);
app.use('/api/sustainability', sustainabilityRoutes);

// Check if MONGO_URI exists
if (!process.env.MONGO_URI) {
  console.error('❌ Error: MONGO_URI not defined in .env file');
  process.exit(1); // Exit if DB URI is missing
}

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(5000, () => console.log('🚀 Server running on port 5000'));
  })
  .catch((err) => {
    console.error('❌ Failed to connect to MongoDB:', err);
  });
