const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Unauthorized access, token missing" });
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden, invalid token" });
    }
    // req.user içine tüm kullanıcı bilgilerini koymak yerine sadece ID'yi koyabilirsiniz
    req.user = { id: decoded.id, email: decoded.email }; // Token'dan email ve ID'yi ayıkla
    next();
  });
};

module.exports = verifyToken;
