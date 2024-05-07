let ubicaciones = []; // Esto actuará como nuestra "base de datos"

class Ubicacion {
    constructor(idUbicacion, descripcion, activosAsociados, imagenUbicacion) {
        this.idUbicacion = idUbicacion;
        this.descripcion = descripcion;
        this.activosAsociados = activosAsociados;
        this.imagenUbicacion = imagenUbicacion;
    }

    // Método para obtener todos los responsables
    static getAll() {
        return ubicaciones;
    }

    // Método para obtener un responsable por su ID
    static getById(idUbicacion) {
        return ubicaciones.find(ubicacion => ubicacion.idUbicacion === idUbicacion);
    }

    // Método para guardar un nuevo responsable en la "base de datos"
    save() {
        ubicaciones.push(this);
    }

    // Método para actualizar la información de un responsable por ID
    static updateById(idUbicacion, updateData) {
        const index = ubicaciones.findIndex(ubicacion => ubicacion.idUbicacion === idUbicacion);
        if (index !== -1) {
            ubicaciones[index] = {...ubicaciones[index], ...updateData};
        }
    }

    // Método para eliminar un responsable por ID
    static deleteById(idUbicacion) {
        ubicaciones = ubicaciones.filter(ubicacion => ubicacion.idUbicacion !== idUbicacion);
    }
}

module.exports = Ubicacion;
