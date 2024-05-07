const express = require('express');
const router = express.Router();
const activoController = require('C:\\Users\\alan1\\Documents\\GitHub\\DW_M3.2\\Controladores\\activoController');

router.post('/', activoController.createActivo);
router.get('/', activoController.getAllActivos);
router.put('/:id', activoController.updateActivo);
router.delete('/:id', activoController.deleteActivo);

module.exports = router;
