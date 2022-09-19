const router  =  require('express').Router();
const User = require("../controller/userController.js");

router.get("/", User.getMethod);
router.get("/:name", User.getParamsMethod);
router.post("/", User.postMethod);

module.exports = router;