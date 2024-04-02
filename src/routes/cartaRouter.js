const express = require('express');
const router = express.Router();
const cartaControllers = require('../controllers/cartaControllers.js')

router.get('/', cartaControllers.list)
router.post('/producto', cartaControllers.agregarProducto)
router.post('/categoria', cartaControllers.agregarCategoria)
router.post('/categoria/update', cartaControllers.editarCategoria)


module.exports = router;