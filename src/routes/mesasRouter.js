const express = require('express');
const router = express.Router();
const mesasController = require('../controllers/mesasController.js')

router.get('/:numeroMesa', mesasController.detalle);
router.post('/:numeroMesa', mesasController.agregarPedidos);
router.put('/:numeroMesa', mesasController.editarPedidos);
router.delete('/:numeroMesa/eliminar', mesasController.eliminarMesa)
router.delete('/:numeroMesa/', mesasController.cerrarMesa)
module.exports = router;