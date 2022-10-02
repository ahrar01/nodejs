const { response } = require("express");
const authorDetails = require("../modals/authorSchema");

class Author {
  createAuthor = async (req, res) => {
    try {
      const { name, age } = req.body;
      if (!name) {
        throw {
          message: "Please enter a name",
        };
      }
      if (!age) {
        throw {
          message: "Please enter a age",
        };
      }
      const response = await authorDetails.create({ name, age });
      res.send({
        status: true,
        response: response,
        message: "Successfully Created user",
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };

  getAuthors = async (req, res) => {
    const response = await authorDetails.find().populate();
    res.send(response);
  };

  getAuthor = async (req, res) => {
    const _id = req.query._id;
    const response = await authorDetails.findOne({ _id: _id });
    res.send(response);
  };

  updateAuthor = async (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const response = await authorDetails.updateMany(
      { _id: id },
      { name: name }
    );
    res.send(response);
  };

  deleteAuthor = async (req, res) => {
    const id = req.body.id;
    const response = await authorDetails.deleteMany({ _id: id });
    res.send(response);
  };
}

module.exports = new Author();

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
