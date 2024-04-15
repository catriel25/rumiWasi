const express = require('express');
const router = express.Router();
const mesasController = require('../controllers/mesasController.js')

router.use('/:numeroMesa', mesasController.detalle);
module.exports = router;