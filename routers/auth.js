const AuthController = require('../controllers/AuthController')

const authRouter = require('express').Router()

authRouter.get('/register', AuthController.register)
authRouter.post('/login', AuthController.login)

module.exports = authRouter