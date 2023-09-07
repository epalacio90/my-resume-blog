const express = require('express');
const router = express.Router();
const userController = require('../controllers/User_controller')


router.get('/count', userController.getUserExistence)
router.post('/create-default', userController.createDefaultUser)
router.post('/login', userController.login)

module.exports = router;