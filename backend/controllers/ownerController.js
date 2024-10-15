// server/controllers/ownerController.js
const Owner = require('../models/Owner');

exports.getAllOwners = async (req, res) => {
  try {
    const owners = await Owner.find();
    res.json(owners);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createOwner = async (req, res) => {
  const owner = new Owner(req.body);
  try {
    const newOwner = await owner.save();
    res.status(201).json(newOwner);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getOwnerById = async (req, res) => {
  try {
    const owner = await Owner.findById(req.params.id);
    if (owner == null) {
      return res.status(404).json({ message: 'Owner not found' });
    }
    res.json(owner);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateOwner = async (req, res) => {
  try {
    const updatedOwner = await Owner.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedOwner);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteOwner = async (req, res) => {
  try {
    await Owner.findByIdAndDelete(req.params.id);
    res.json({ message: 'Owner deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};