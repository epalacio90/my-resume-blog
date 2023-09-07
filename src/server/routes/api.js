const express = require('express');
const router = express.Router();

router.use('/', require('./index'))
router.use('/users', require('./user'))

module.exports = router;