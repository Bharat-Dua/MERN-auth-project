const register = require("../User-Controller/UserController");

const router = require("express").Router();

router.post("/register", register);

module.exports = router;
