
const validateHospital = (req, res, next) => {
    const { name, city } = req.body;
    
    const errors = [];
    
    if (!name || name.trim() === '') {
      errors.push('Hospital name is required');
    }
    
    if (!city || city.trim() === '') {
      errors.push('City is required');
    }
    
    if (req.body.rating !== undefined) {
      const rating = parseFloat(req.body.rating);
      if (isNaN(rating) || rating < 0 || rating > 5) {
        errors.push('Rating must be a number between 0 and 5');
      }
    }
    
    if (errors.length > 0) {
      return res.status(400).json({ message: errors.join(', ') });
    }
    
    next();
  };
  
  module.exports = {
    validateHospital
  };