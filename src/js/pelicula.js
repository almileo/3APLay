export default class Pelicula{
    constructor(codigo, nombre, categoria, descripcion, imagen)
    {
        this.codigo = codigo;
        this.nombre = nombre;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.itemDestacado = false; // false -> no está destacada; true -> está destacada
    }
}