const mongoose = require("mongoose");

const books = new mongoose.Schema({
  name: String,
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: "author" },
});

const booksDetails = new mongoose.model("book", books);

module.exports = booksDetails;
