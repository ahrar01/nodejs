const router  =  require('express').Router();
const User = require("../controller/userController.js");

router.get('/', User.create);

module.exports = router;