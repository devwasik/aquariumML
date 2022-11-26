const routeAuthentication = (req, res, next) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Invalid API key or session" });
  }

  return next();
};

module.exports = {
  routeAuthentication,
};
