const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const registerController = require("../controllers/registerController");

router.post("/", loginController.handleLogin);
router.post("/", registerController.handleRegister);

module.exports = router;
