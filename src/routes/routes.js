const routes = require('express').Router();
const UserController = require('../controllers/UserController');

routes.get('/users',UserController.listUsers);
routes.post('/users',UserController.createUser);
routes.put('/users/:id',UserController.updateUser);
routes.delete('/users/:id',UserController.deleteUser);

module.exports = routes;