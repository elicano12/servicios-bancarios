const jwt = require("jsonwebtoken");
const config = require("../config");

const verifyToken = (req, res, next) => {
  // Obtener el token del encabezado Authorization
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "Token is required" });
  }

  jwt.verify(token, config.jwt_secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    // Si el token es válido, guarda la información del usuario en la solicitud para su uso posterior
    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;
