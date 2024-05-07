const Responsable = require('C:/Users/alan1/Documents/GitHub/DW_M3.1/Modelos/responsableModel');

// Función para crear activos
exports.createResponsable = (req, res) => {
    const { idResponsable, numeroEmpleado, nombre, activosCustodia, imagen } = req.body;
    let nuevoResponsable = new Responsable(idResponsable, numeroEmpleado, nombre, activosCustodia, imagen);
    nuevoResponsable.save();
    console.log(`Responsable creado: ${JSON.stringify(nuevoResponsable)}`);
    res.status(201).json(nuevoResponsable);
};

// Función para obtener todos los activos
exports.getAllResponsables = (req, res) => {
    console.log('Obteniendo todos los responsables:');
    const todosLosResponsables = Responsable.getAll();
    console.log(JSON.stringify(todosLosResponsables));
    res.status(200).json(todosLosResponsables);
};

// Función para actualizar un activo
exports.updateResponsable = (req, res) => {
    const { idResponsable } = req.params;
    const updateData = req.body;
    Responsable.updateById(idResponsable, updateData);
    console.log(`Responsable actualizado: ${JSON.stringify(Responsable.getById(idResponsable))}`);
    res.status(200).json(Responsable.getById(idResponsable));
};

// Función para eliminar un activo
exports.deleteResponsable = (req, res) => {
    const { idResponsable } = req.params;
    Responsable.deleteById(idResponsable);
    console.log(`Responsable con ID ${idResponsable} eliminado`);
    res.status(204).send(); // 204 No Content, apropiado para cuando no se devuelve contenido.
};
