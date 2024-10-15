// server/models/Owner.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OwnerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: {
    type: String,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number.'],
    required: true
  },
  properties: [{
    roomNumber: { type: String, required: true },
    rentAmount: { type: Number, required: true },
    electricityMeterReading: { type: Number, required: true, min: 0 },
    electricityBill: { type: Number, required: true, min: 0 },
    amountPending: { type: Number, required: true, min: 0, default: 0 },
    joiningDate: { type: Date, required: true },
    clientId: { type: Schema.Types.ObjectId, ref: 'Client' }
  }],
}, { timestamps: true });

module.exports = mongoose.model('Owner', OwnerSchema);