const express = require("express");
const userController = require("../controllers/users.controllers");
const verifyToken = require("../middlewares/verifyTokenMiddleware");

const UserRoutes = express.Router();

UserRoutes.post('/login', userController.loginToken);

UserRoutes.get("/", verifyToken, userController.getAllUsers);
UserRoutes.post("/", verifyToken, userController.createUser);
UserRoutes.put("/:id", verifyToken, userController.updateUser);
UserRoutes.delete("/:id", verifyToken, userController.deleteUser);

module.exports = UserRoutes;
