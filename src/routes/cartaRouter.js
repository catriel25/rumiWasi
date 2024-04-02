const express = require('express');
const router = express.Router();
const cartaControllers = require('../controllers/cartaControllers.js')

router.get('/', cartaControllers.list)
router.post('/producto', cartaControllers.agregarProducto)
router.post('/categoria', cartaControllers.agregarCategoria)
module.exports = router;