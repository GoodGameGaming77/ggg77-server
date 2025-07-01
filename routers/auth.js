const AuthController = require('../controllers/AuthController')

const authRouter = require('express').Router()

authRouter.get('/register', AuthController.register)

module.exports = authRouter