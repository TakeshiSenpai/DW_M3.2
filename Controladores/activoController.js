const Activo = require('C:/Users/alan1/Documents/GitHub/DW_M3.1/Modelos/activoModel');

// Función para crear activos
exports.createActivo = (req, res) => {
    const { id, numeroSerie, numeroInventario, tipo, descripcion, ubicacion, responsable, imagen } = req.body;
    let nuevoActivo = new Activo(id, numeroSerie, numeroInventario, tipo, descripcion, ubicacion, responsable, imagen);
    nuevoActivo.save();
    console.log(`Activo creado: ${JSON.stringify(nuevoActivo)}`);
    res.status(201).json(nuevoActivo);
};

// Función para obtener todos los activos
exports.getAllActivos = (req, res) => {
    console.log('Obteniendo todos los activos:');
    const todosLosActivos = Activo.getAll();
    console.log(JSON.stringify(todosLosActivos));
    res.status(200).json(todosLosActivos);
};

// Función para actualizar un activo
exports.updateActivo = (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    Activo.updateById(id, updateData);
    console.log(`Activo actualizado: ${JSON.stringify(Activo.getById(id))}`);
    res.status(200).json(Activo.getById(id));
};

// Función para eliminar un activo
exports.deleteActivo = (req, res) => {
    const { id } = req.params;
    Activo.deleteById(id);
    console.log(`Activo con ID ${id} eliminado`);
    res.status(204).send(); // 204 No Content, apropiado para cuando no se devuelve contenido.
};
