const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Hospital name is required'],
    trim: true
  },
  city: {
    type: String,
    required: [true, 'City is required'],
    trim: true
  },
  imageUrl: {
    type: String,
    default: ''
  },
  specialities: {
    type: [String],
    default: []
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  description: {
    type: String,
    default: ''
  },
  doctorsCount: {
    type: Number,
    default: 0,
    min: 0
  },
  departmentsCount: {
    type: Number,
    default: 0,
    min: 0
  }
}, { timestamps: true });

// Add index for city to improve query performance
hospitalSchema.index({ city: 1 });

module.exports = mongoose.model('Hospital', hospitalSchema);