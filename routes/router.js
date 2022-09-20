const router  =  require('express').Router();
const User = require("../controller/userController.js");

router.post("/", User.create);
router.get("/", User.getUsers);
router.get("/user", User.getUser);


module.exports = router;