const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Kullanıcı kaydı
router.post("/register", userController.registerUser);

// Kullanıcı girişi
router.post("/login", userController.loginUser);

// Kimliği doğrulanmış kullanıcının bilgilerini al
router.get("/me", userController.getLoggedInUser);

// Admin: Tüm kullanıcıları al
router.get("/", userController.getUsers);

// Admin: ID'ye göre kullanıcı al
router.get("/:id", userController.getUserById);

// Kullanıcı veya admin: Kullanıcıyı güncelle
router.put("/:id", userController.updateUser);

// Admin: Kullanıcıyı sil
router.delete("/:id", userController.deleteUser);

module.exports = router;
