const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const tokenValidation = require('../middleware/tokenValidation')

router.post('/Signup', userController.createUser)

router.post('/Login', userController.loginUser)

router.post(
  '/Profile',
  tokenValidation.validateToken,
  userController.getUserProfile
)

router.put(
  '/profile',
  tokenValidation.validateToken,
  userController.updateUserProfile
)

module.exports = router
