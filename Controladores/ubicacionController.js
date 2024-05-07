const Ubicacion = require('C:/Users/alan1/Documents/GitHub/DW_M3.1/Modelos/ubicacionModel');

// Función para crear activos
exports.createUbicacion = (req, res) => {
    const { idUbicacion, descripcion, activosAsociados, imagenUbicacion } = req.body;
    let nuevoUbicacion = new Ubicacion(idUbicacion, descripcion, activosAsociados, imagenUbicacion);
    nuevoUbicacion.save();
    console.log(`Ubicación creada: ${JSON.stringify(nuevoUbicacion)}`);
    res.status(201).json(nuevoUbicacion);
};

// Función para obtener todos los activos
exports.getAllUbicaciones = (req, res) => {
    console.log('Obteniendo todas las ubicaciones:');
    const todasLasUbicaciones = Ubicacion.getAll();
    console.log(JSON.stringify(todasLasUbicaciones));
    res.status(200).json(todasLasUbicaciones);
};

// Función para actualizar un activo
exports.updateUbicacion = (req, res) => {
    const { idUbicacion } = req.params;
    const updateData = req.body;
    Ubicacion.updateById(idUbicacion, updateData);
    console.log(`Ubicación actualizada: ${JSON.stringify(Ubicacion.getById(idUbicacion))}`);
    res.status(200).json(Ubicacion.getById(idUbicacion));
};

// Función para eliminar un activo
exports.deleteUbicacion = (req, res) => {
    const { idUbicacion } = req.params;
    Ubicacion.deleteById(idUbicacion);
    console.log(`Ubicación con ID ${idUbicacion} eliminado`);
    res.status(204).send(); // 204 No Content, apropiado para cuando no se devuelve contenido.
};
