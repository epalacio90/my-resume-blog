const express = require('express');
const router = express.Router();
const workController = require('../controllers/Work_controller')

router.post('/', workController.createWork)
router.get('/', workController.getAllWorks)

module.exports = router;