const express = require('express');
const router = express.Router();
const cartaControllers = require('../controllers/cartaControllers.js')

router.get('/', cartaControllers.list)
router.post('/producto', cartaControllers.agregarProducto)
router.post('/categoria', cartaControllers.agregarCategoria)
router.put('/categoria/update', cartaControllers.editarCategoria)
router.put('/producto/update', cartaControllers.editarProducto)


module.exports = router;