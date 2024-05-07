const express = require('express');
const router = express.Router();
const ubicacionController = require('C:\\Users\\alan1\\Documents\\GitHub\\DW_M3.2\\Controladores\\ubicacionController');

router.post('/', ubicacionController.createUbicacion);
router.get('/', ubicacionController.getAllUbicaciones);
router.put('/:idUbicacion', ubicacionController.updateUbicacion);
router.delete('/:idUbicacion', ubicacionController.deleteUbicacion);

module.exports = router;
