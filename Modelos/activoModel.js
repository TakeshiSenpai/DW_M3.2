let activos = []; // Esto actuará como nuestra "base de datos"

class Activo {
    constructor(id, numeroSerie, numeroInventario, tipo, descripcion, ubicacion, responsable, imagen) {
        this.id = id;
        this.numeroSerie = numeroSerie;
        this.numeroInventario = numeroInventario;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.ubicacion = ubicacion;
        this.responsable = responsable;
        this.imagen = imagen;
    }

    static getAll() {
        return activos;
    }

    static getById(id) {
        return activos.find(activo => activo.id === id);
    }

    save() {
        activos.push(this);
    }

    static updateById(id, updateData) {
        const index = activos.findIndex(activo => activo.id === id);
        if (index !== -1) {
            activos[index] = {...activos[index], ...updateData};
        }
    }

    static deleteById(id) {
        activos = activos.filter(activo => activo.id !== id);
    }    
}

module.exports = Activo;
