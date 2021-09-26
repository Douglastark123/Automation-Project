const { Router } = require('express');
const UserController = require('./controllers/UserController')

const user = new UserController;

const routes = Router();

routes.get('/users', user.index)
routes.post('/users', user.create)
routes.put('/users/:id', user.update)
routes.delete('/users/:id', user.delete)

module.exports = routes;