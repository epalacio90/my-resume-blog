const express = require('express');
const router = express.Router();
const userController = require('../controllers/User_controller')


router.get('/count', userController.getUserExistence);

module.exports = router;