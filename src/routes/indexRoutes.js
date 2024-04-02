const express = require('express');
const router = express.Router();

router.use('/', require('./mainRouter'));
router.use('/carta', require('./cartaRouter'));
router.use('/mesas', require('./mesasRouter'));

module.exports = router;