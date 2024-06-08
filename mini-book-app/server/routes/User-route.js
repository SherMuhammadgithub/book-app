const express = require('express');
const router = express.Router();
const User = require("../models/User");
const userController = require("../controllers/user-controller");

router.post("/signup", userController.signUp); //adding User
router.post("/signin", userController.signIn); //Checking User

module.exports = router;