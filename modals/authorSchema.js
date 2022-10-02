const mongoose = require("mongoose");

const author = new mongoose.Schema({
  name: String,
  age: Number,
});

const authorDetails = new mongoose.model("author", author);

module.exports = authorDetails;
