const { Router } = require('express');
const UserController = require('./controllers/UserController')

const user = new UserController;

const routes = Router();

routes.get('/users', user.index)

module.exports = routes;