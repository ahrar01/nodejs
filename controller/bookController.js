const { response } = require("express");
const bookDetails = require("../modals/booksSchema");

class Book {
  createBook = async (req, res) => {
    try {
      const { name, authorId } = req.body;
      if (!name) {
        throw {
          message: "Please enter a name",
        };
      }
      if (!authorId) {
        throw {
          message: "Please enter a author ID",
        };
      }

      const response = await bookDetails.create({ name, authorId });
      res.send({
        status: true,
        response: response,
        message: "Successfully Created book",
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };

  getBooks = async (req, res) => {
    const response = await bookDetails.find().populate("authorId");
    res.send(response);
  };
  getAuthorBooks = async (req, res) => {
    const authorId = req.query.authorId;

    const response = await bookDetails
      .find({ authorId: authorId })
      .populate("authorId");
    res.send(response);
  };

  getBook = async (req, res) => {
    const authorId = req.query.authorId;
    const response = await bookDetails
      .findOne({ authorId: authorId })
      .populate("authorId");
    res.send(response);
  };

  updateBook = async (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const response = await bookDetails.updateMany({ _id: id }, { name: name });
    res.send(response);
  };

  deleteBook = async (req, res) => {
    const id = req.body.id;
    const response = await bookDetails.deleteMany({ _id: id });
    res.send(response);
  };
}

module.exports = new Book();

/*
CRUD
C - create
R -Read
U - Update
D - Delete

CALLBACK HELL
Migration

Normalization - References  -> Consistency
Denormalization -Embedded Documents -> Performance
*/
