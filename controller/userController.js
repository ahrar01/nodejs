const { response } = require("express");
const userDetails = require("../modals/userSchema");

class User {
  create = async (req, res) => {
    try {
      const { name, age, address } = req.body;
      if (!name) {
        throw {
          message: "Please enter a name",
        };
      }
      if(!age){
         throw {
           message: "Please enter a age",
         };
      }
      const response = await userDetails.create({ name, age, address });
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

  getUsers = async (req, res) => {
    const response = await userDetails.find();
    res.send(response);
  };

  getUser = async (req, res) => {
    const _id = req.query._id;
    const response = await userDetails.findOne({ _id: _id });
    res.send(response);
  };

  updateUser = async (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const response = await userDetails.updateMany({ _id: id }, { name: name });
    res.send(response);
  };

  deleteUser = async (req, res) => {
    const id = req.body.id;
    const response = await userDetails.deleteMany({ _id: id });
    res.send(response);
  };
}

module.exports = new User();

/*
CRUD
C - create
R -Read
U - Update
D - Delete

CALLBACK HELL
Migration
*/
