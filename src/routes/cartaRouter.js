const express = require('express');
const router = express.Router();
const cartaControllers = require('../controllers/cartaControllers.js')

router.get('/', cartaControllers.list)
router.post('/producto', cartaControllers.agregarProducto)
router.post('/categoria', cartaControllers.agregarCategoria)
router.put('/categoria/update', cartaControllers.editarCategoria)
router.delete('/categoria/delete', cartaControllers.eliminarCategoria)
router.get('/producto/:id', cartaControllers.detalleProducto)
router.put('/producto/:id', cartaControllers.editarProducto)
router.delete('/producto/:id', cartaControllers.eliminarProducto)



module.exports = router;