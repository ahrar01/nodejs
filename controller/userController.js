class User {
  getMethod = async (req, res) => {
    const { name, age } = req.query;
    res.send(req.query);
  };

  getParamsMethod = async (req, res) => {
    const { name, age } = req.params;
    res.send(req.params);
  };

  postMethod = async (req, res) => {
    const { name, age } = req.body;
    res.send(`hello ${name} ${age}`);
  };
}

module.exports = new User();

/*
CRUD
C - create
R -Read
U - Update
D - Delete
*/
