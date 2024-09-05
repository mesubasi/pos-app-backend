//POST Register
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const handleRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(403).json({ error: "Email already in use!" });
    }

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).json("A new user created successfully.");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = handleRegister;
