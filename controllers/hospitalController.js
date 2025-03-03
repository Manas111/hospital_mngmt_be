const Hospital = require('../models/Hospital');

exports.getAllHospitals = async (req, res, next) => {
  try {
    const hospitals = await Hospital.find();
    res.status(200).json(hospitals);
  } catch (error) {
    next(error);
  }
};

exports.getHospitalsByCity = async (req, res, next) => {
  try {
    const { city } = req.params;
    const hospitals = await Hospital.find({ 
      city: { $regex: new RegExp(city, 'i') } 
    });
    
    res.status(200).json(hospitals);
  } catch (error) {
    next(error);
  }
};

exports.getHospitalById = async (req, res, next) => {
  try {
    const hospital = await Hospital.findById(req.params.id);
    
    if (!hospital) {
      return res.status(404).json({ message: 'Hospital not found' });
    }
    
    res.status(200).json(hospital);
  } catch (error) {
    next(error);
  }
};

exports.createHospital = async (req, res, next) => {
  try {
    const newHospital = new Hospital(req.body);
    const savedHospital = await newHospital.save();
    
    res.status(201).json(savedHospital);
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ message: messages.join(', ') });
    }
    next(error);
  }
};

exports.updateHospital = async (req, res, next) => {
  try {
    const hospital = await Hospital.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!hospital) {
      return res.status(404).json({ message: 'Hospital not found' });
    }
    
    res.status(200).json(hospital);
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ message: messages.join(', ') });
    }
    next(error);
  }
};

exports.deleteHospital = async (req, res, next) => {
  try {
    const hospital = await Hospital.findByIdAndDelete(req.params.id);
    
    if (!hospital) {
      return res.status(404).json({ message: 'Hospital not found' });
    }
    
    res.status(200).json({ message: 'Hospital deleted successfully' });
  } catch (error) {
    next(error);
  }
};