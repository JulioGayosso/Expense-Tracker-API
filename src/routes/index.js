const express = require('express');
const routerUser = require('./user.router');
const routerExpense = require('./expense.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/users',routerUser)
router.use('/expenses',routerExpense)


module.exports = router;