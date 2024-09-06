const jwt = require("jsonwebtoken");
const User = require("../models/User");

const handleRefreshToken = async (req, res) => {
  const { jwt: refreshToken } = req.cookies;

  if (!refreshToken) return res.sendStatus(401); // Unauthorized

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) return res.sendStatus(403); // Forbidden

      const user = await User.findOne({ email: decoded.email });
      if (!user) return res.sendStatus(403); // Forbidden

      const newAccessToken = jwt.sign(
        { email: user.email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "50m" }
      );

      res.status(200).json({ accessToken: newAccessToken });
    }
  );
};

module.exports = { handleRefreshToken };
