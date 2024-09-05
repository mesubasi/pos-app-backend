//POST Login
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (validPassword) {
      const accessToken = jwt.sign(
        {
          email: user.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
          algorithm: "HS256",
          expiresIn: "50m",
        }
      );

      const refreshToken = jwt.sign(
        {
          email: user.email,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
          algorithm: "HS256",
          expiresIn: "1d",
        }
      );

      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // 1 gün
        secure: true,
        sameSite: "strict",
      });

      return res.status(200).json({
        accessToken,
        email: user.email,
      });
    } else {
      return res.status(403).json({ error: "Invalid Password!" });
    }

    res.status(200).json({
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (err) {
    res.status(500).json({ error: "Login failed", details: err.message });
  }
};

module.exports = { handleLogin };
