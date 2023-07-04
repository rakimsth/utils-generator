// initialize mongoose to create schema
const mongoose = require("mongoose");

// Create schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: Number,
  email: String,
  address: String,
});

//create model from schema

module.exports = mongoose.model("Contact", contactSchema);
