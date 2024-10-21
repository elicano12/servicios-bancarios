const { compareSync, hashSync } = require("bcrypt");
const { usersRepository } = require("../repositories");
const { NotFoundError } = require("../utils/errors");
const generateToken = require("../utils/generateToken");


const getUsers = async () => {
  const users = await usersRepository.getUsers();

  if (users.length === 0) {
    throw new NotFoundError("Users not found");
  }

  return users;
};

const createUser = async (user) => {
  const newUser = await usersRepository.createUser(user);
  return newUser;
};

const updateUser = async (user, id) => {
  const [rowUpdate, updatedUser] = await usersRepository.updateUser(user, id);

  if (!updatedUser) {
    throw new NotFoundError("User not found");
  }

  return updatedUser;
};

const deleteUser = async (id) => {
  const deletedUser = await usersRepository.deleteUser(id);
  if (!deletedUser) {
    throw new NotFoundError("User not found");
  }
  return deletedUser;
};

const getLoginToken = async (email, password) => {
    const user = await usersRepository.getUserByEmail(email);
    
    if (!user) {
      throw new NotFoundError("User not found");
    }
  
    const hash = await hashSync(user.password, 10);
    const validPassword = await compareSync(password, hash);
  
    if (!validPassword) {
      throw new Error("Incorrect password");
    }
  
    const token = generateToken(user);
    return token;
  };

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getLoginToken,
};
