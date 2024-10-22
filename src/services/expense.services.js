
const Expense = require("../models/Expense");
const User = require("../models/User");

const getAllUsers = () => {
    return Expense.findAll({include:[User]})
}

const createUsers = (body) => {
    return Expense.create(body)
}

const getOneUsers = (id) => {
    return Expense.findByPk(id)
}

const updateUsers = (body ,id) => {
    return Expense.update(
        body,
        { where: {id}, returning: true }
    );
}

const deleteUsers = (id) => {
    return Expense.destroy({ where: {id} });
}

const getUserServices = async (email) => {
    return await Expense.findOne({ where: { email } });
  }

module.exports = {
    getAllUsers,
    createUsers,
    getOneUsers,
    updateUsers,
    deleteUsers,
    getUserServices
}