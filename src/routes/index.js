const express = require('express');
var rootRouter = express.Router();

const users = require('./usersRoutes/user.route');

rootRouter.use('/',users);

module.exports = rootRouter;