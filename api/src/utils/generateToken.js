const jwt = require("jsonwebtoken");
const config = require("../config");

const generateToken = (user) => {
  const token = jwt.sign({ id: user.id, rol: user.rol_id }, config.jwt_secret, {
    expiresIn: "2h",
  });

  return token;
};

module.exports = generateToken;