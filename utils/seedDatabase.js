const mongoose = require('mongoose');
const Hospital = require('../models/Hospital');

// Connect to MongoDB
mongoose.connect(`${process.env.MONGODB_URI}/hospital-management`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB for seeding'))
.catch(err => {
  console.error('Failed to connect to MongoDB:', err);
  process.exit(1);
});

const hospitals = [
    {
      name: "General Hospital",
      city: "New York",
      imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80",
      specialities: ["Cardiology", "Neurology"],
      rating: 4.5,
      description: "A leading healthcare facility providing comprehensive medical services.",
      doctorsCount: 150,
      departmentsCount: 12
    },
    {
      name: "City Medical Center",
      city: "Chicago",
      imageUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80",
      specialities: ["Orthopedics", "Pediatrics"],
      rating: 4.2,
      description: "Specialized medical center focusing on children and orthopedic care.",
      doctorsCount: 95,
      departmentsCount: 8
    },
    {
      name: "Lakeside Hospital",
      city: "Los Angeles",
      imageUrl: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80",
      specialities: ["Oncology", "Dermatology"],
      rating: 4.7,
      description: "Premier hospital known for cancer treatment and dermatological services.",
      doctorsCount: 120,
      departmentsCount: 10
    },
    {
      name: "Central Hospital",
      city: "Boston",
      imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80",
      specialities: ["Cardiology", "Ophthalmology"],
      rating: 4.0,
      description: "Centrally located hospital with state-of-the-art equipment.",
      doctorsCount: 85,
      departmentsCount: 7
    },
    {
      name: "Riverside Medical",
      city: "New York",
      imageUrl: "https://images.unsplash.com/photo-1587351021759-3e566b3db4fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80",
      specialities: ["Gynecology", "Pediatrics"],
      rating: 3.9,
      description: "Family-oriented medical facility by the river.",
      doctorsCount: 65,
      departmentsCount: 6
    }
  ];

// Seed function
const seedDatabase = async () => {
  try {
    // Clear existing data
    await Hospital.deleteMany({});
    console.log('Cleared existing hospital data');
    
    // Insert sample hospitals
    const createdHospitals = await Hospital.insertMany(hospitals);
    console.log(`Added ${createdHospitals.length} hospitals to the database`);
    
    mongoose.disconnect();
    console.log('Database seeding completed!');
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.disconnect();
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();