class About {
    constructor(nombre, descripcion, direccion){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.direccion = direccion;
    }

    obtenerCoordenadas(){
        return 'Las coordenadas son..';
    }
}

export default About;