// routes/hospitals.js
const express = require('express');
const router = express.Router();
const hospitalController = require('../controllers/hospitalController');

// Get all hospitals
router.get('/', hospitalController.getAllHospitals);

// Get hospitals by city
router.get('/city/:city', hospitalController.getHospitalsByCity);

// Get hospital by ID
router.get('/:id', hospitalController.getHospitalById);

// Create new hospital
router.post('/', hospitalController.createHospital);

// Update hospital
router.put('/:id', hospitalController.updateHospital);

// Delete hospital
router.delete('/:id', hospitalController.deleteHospital);

module.exports = router;