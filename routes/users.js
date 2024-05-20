const User = require("../models/User");
const router = require("express").Router();

//GET All Users
router.get("/get-all-users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET a User
router.get("/", async (req, res) => {
  const { userID } = req.body;
  try {
    const user = await User.findById(userID);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
