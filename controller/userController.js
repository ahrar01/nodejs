const userDetails = require("../modals/userSchema");

class User {
  create = async (req, res) => {
    const { name, age, address } = req.body;
    const response = await userDetails.create({ name, age, address });
    res.send(response);
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
}

module.exports = new User();

/*
CRUD
C - create
R -Read
U - Update
D - Delete

CALLBACK HELL
*/
