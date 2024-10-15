// server/models/Client.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  area: {
    type: String,
    enum: ["Lawgate", "Green Valley", "Ramamandi", "Phagwara"],
    required: true,
  },
  price: {
    type: Number,
    min: 1000,
    max: 20000,
    required: true,
  },
  food: {
    type: String,
    enum: ["Food", "without food"],
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "mix"],
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  facilities: [{
    type: String,
    enum: [
      "Refrigerator", "Window AC", "Wall AC", "TV", "Inverter",
      "Generator", "Water Heater", "Washing Machine", "Others"
    ],
  }],
  wishlist: [{ type: Schema.Types.ObjectId, ref: 'Client' }],
}, { timestamps: true });

module.exports = mongoose.model('Client', ClientSchema);

