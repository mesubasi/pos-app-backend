const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const registerController = require("../controllers/registerController");

router.post("/login", loginController.handleLogin);
router.post("/register", registerController.handleRegister);

module.exports = router;
