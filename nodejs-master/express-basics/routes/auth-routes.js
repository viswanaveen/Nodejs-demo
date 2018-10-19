const authController = require('../controllers/auth-controller')

const express = require('express')

const authRouter = express.Router()

authRouter.post('/api/login', authController.loginUser)

module.exports = authRouter;