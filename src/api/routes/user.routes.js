const express = require('express');
const {login, register, checkSession} = require('../controllers/user.controller');
const { isAuth } = require('../../middlewares/auth');
const userRouter = express.Router();

userRouter.post('/login', login)
userRouter.post('/register', register)
userRouter.post('/checksession', [isAuth], checkSession)

module.exports = userRouter;