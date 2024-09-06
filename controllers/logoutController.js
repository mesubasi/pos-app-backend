// POST /api/auth/logout
const handleLogout = (req, res) => {
  res.clearCookie("jwt", { httpOnly: true, secure: true, sameSite: "strict" });
  res.sendStatus(204);
};

module.exports = { handleLogout };
