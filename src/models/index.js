//? belongsTo: pertenece a
//? hasMany: tiene muchos 

const Expense = require("./Expense");
const User = require("./User");

Expense.belongsTo(User)
User.hasMany(Expense)
