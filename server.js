const express = require('express');
const cors = require('cors');
require('dotenv').config();

// const seedDatabase = require('./utils/seedDatabase');


const mongoose = require('mongoose');
const hospitalsRoutes = require('./routes/hospitals');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());

mongoose.connect(`${process.env.MONGODB_URI}/hospital-management`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB:', err));


app.use('/api/hospitals', hospitalsRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});