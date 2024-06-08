const {register,login, verifyUser} = require("../User-Controller/UserController");

const router = require("express").Router();

router.post("/register", register);

router.post("/login",login)

router.get("/verify/:token",verifyUser)


module.exports = router;
