const { usersServices } = require("../services");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await usersServices.getUsers();
    return res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    const newUser = await usersServices.createUser(req.body);
    return res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedUser = await usersServices.updateUser(req.body, id);
    return res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await usersServices.deleteUser(id);
    return res.json({
      message: `User deleted successfully with userId ${id}`,
      deletedCount: deletedUser,
    });
  } catch (err) {
    next(err);
  }
};

const loginToken = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await usersServices.getLoginToken(email, password);

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  loginToken,
};
