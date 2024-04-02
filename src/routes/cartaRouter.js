const express = require('express');
const router = express.Router();
const cartaControllers = require('../controllers/cartaControllers.js')

router.get('/agregar', cartaControllers.nuevo)

module.exports = router;