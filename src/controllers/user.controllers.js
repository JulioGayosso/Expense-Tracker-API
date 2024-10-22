const catchError = require('../utils/catchError');
const jwt = require('jsonwebtoken');
const { getAllUsers, createUsers, getOneUsers, updateUsers, deleteUsers } = require('../services/user.services');

const getAll = catchError(async(req, res) => { 
    const results = await getAllUsers();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const body = {...req.body, password: req.hashPassword}
    console.log(body)
    const result = await createUsers(body)
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await getOneUsers(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await deleteUsers(id)
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await updateUsers(req.body , id)
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

const login = catchError(async (req, res) => {
    const user = req.userLogin;
    if (!user) return res.status(401).json({ error: "Invalid credentials" });
  
    const token = jwt.sign({ user }, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });
  
    return res.json({ user, token });
  });


module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    login
}