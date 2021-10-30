const route = require("express").Router();

const UserController = require('../controller/userController')

route.post('/signUp', UserController.SignUp);
route.post('/login', UserController.Login);

module.exports = route;