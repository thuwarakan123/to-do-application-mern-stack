// Importing Mongoose library
const mongoose = require('mongoose');

// Defining the ToDo schema
const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
});

// Creating and exporting the ToDo model
module.exports = mongoose.model('ToDo', todoSchema);