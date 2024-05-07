let responsables = []; // Esto actuará como nuestra "base de datos"

class Responsable {
    constructor(idResponsable, numeroEmpleado, nombre, activosCustodia, imagen) {
        this.idResponsable = idResponsable;
        this.numeroEmpleado = numeroEmpleado;
        this.nombre = nombre;
        this.activosCustodia = activosCustodia;
        this.imagen = imagen;
    }

    // Método para obtener todos los responsables
    static getAll() {
        return responsables;
    }

    // Método para obtener un responsable por su ID
    static getById(idResponsable) {
        return responsables.find(responsable => responsable.idResponsable === idResponsable);
    }

    // Método para guardar un nuevo responsable en la "base de datos"
    save() {
        responsables.push(this);
    }

    // Método para actualizar la información de un responsable por ID
    static updateById(idResponsable, updateData) {
        const index = responsables.findIndex(responsable => responsable.idResponsable === idResponsable);
        if (index !== -1) {
            responsables[index] = {...responsables[index], ...updateData};
        }
    }

    // Método para eliminar un responsable por ID
    static deleteById(idResponsable) {
        responsables = responsables.filter(responsable => responsable.idResponsable !== idResponsable);
    }
}

module.exports = Responsable;
