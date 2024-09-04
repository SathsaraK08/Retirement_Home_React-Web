const Service = require('../models/Service');

// Get all services
const getServices = async (req, res) => {
  try {
    const services = await Service.find({});
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new service
const addService = async (req, res) => {
  const { name, description, image } = req.body;

  try {
    const newService = new Service({ name, description, image });
    await newService.save();
    res.status(201).json(newService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getServices, addService };
