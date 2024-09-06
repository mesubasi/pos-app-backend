const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const registerController = require("../controllers/registerController");
const refreshTokenController = require("../controllers/refreshTokenController");
const logoutController = require("../controllers/logoutController");

router.post("/login", loginController.handleLogin);
router.post("/register", registerController.handleRegister);
router.post("/refresh", refreshTokenController.handleRefreshToken);
router.post("/logout", logoutController.handleLogout);

module.exports = router;
