const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post(
  "/login",
  userController.registerUser,
  userController.loginUser,
  userController.getLoggedInUser,
  userController.getUsers,
  userController.getUserById,
  userController.updateUser,
  userController.deleteUser
);
