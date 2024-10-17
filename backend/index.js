const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { 
  // useNewUrlParser: true, 
  // useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
const clientRoutes = require('./routes/clientRoutes');
const ownerRoutes = require('./routes/ownerRoutes');

app.use('/api/clients', clientRoutes);
app.use('/api/owners', ownerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));