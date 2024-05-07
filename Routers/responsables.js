const express = require('express');
const router = express.Router();
const responsableController = require('C:\\Users\\alan1\\Documents\\GitHub\\DW_M3.2\\Controladores\\responsableController');

router.post('/', responsableController.createResponsable);
router.get('/', responsableController.getAllResponsables);
router.put('/:idResponsable', responsableController.updateResponsable);
router.delete('/:idResponsable', responsableController.deleteResponsable);

module.exports = router;
