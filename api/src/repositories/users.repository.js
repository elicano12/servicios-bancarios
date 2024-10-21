const { User } = require("../models");

const getUserByEmail = (email) => {
    return User.findOne({ where: { email } });
};

const getUsers = () => {
    return User.findAll(); 
};

const createUser = (user) => {
    return User.create(user);
};

const updateUser = (user, id) => {
    return User.update(user, { where: { id }, returning: true });
};

const deleteUser = (id) => {
    return User.destroy({ where: { id } });
};

module.exports = {
    getUserByEmail,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
  };