const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/authController')

authRouter.post('/google',authController.googleAuth);

module.exports = authRouter;