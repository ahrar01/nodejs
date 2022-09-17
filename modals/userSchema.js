const mongoose = require("mongoose");

const user = new mongoose.Schema({
  name: String,
  age: Number,
  address: String,
});

const userDetails = new mongoose.model('user', user);

module.exports = userDetails;

