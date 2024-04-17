const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers')

router.get('/', mainControllers.index)
router.post('/', mainControllers.agregarMesa)

module.exports = router;