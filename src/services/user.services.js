
const User = require("../models/User");

const getAllUsers = () => {
    return User.findAll()
}

const createUsers = (body) => {
    return User.create(body)
}

const getOneUsers = (id) => {
    return User.findByPk(id)
}

const updateUsers = (body ,id) => {
    return User.update(
        body,
        { where: {id}, returning: true }
    );
}

const deleteUsers = (id) => {
    return User.destroy({ where: {id} });
}

const getUserServices = async (email) => {
    return await User.findOne({ where: { email } });
  }

module.exports = {
    getAllUsers,
    createUsers,
    getOneUsers,
    updateUsers,
    deleteUsers,
    getUserServices
}