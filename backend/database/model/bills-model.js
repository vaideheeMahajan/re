const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Bill = new Schema({
  customerName: {
    type: String,
    required: true
  },
  invoiceNumber: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  mode: {
    type: String,
    required: true
  },
  gstNumber: {
    type: String,
    required: true
  },
  panNumber: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: Number,
    required: true
  },
  address: {
    type: String
  },
  itemsList: [{
    amount: "",
    description: "",
    discount: "",
    gstPercentage: "",
    quantity: "",
    total: ""
  }]
}, {
  collection: 'bills'
})
module.exports = mongoose.model('Bill', Bill)
