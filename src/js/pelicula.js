export default class Pelicula{
    constructor(codigo, nombre, categoria, descripcion, imagen)
    {
        this.codigo = codigo;
        this.nombre = nombre;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.publicado = false // false es que no esta publicado; true cuando se habilita
        this.itemDestacado = false; // false -> no está destacada; true -> está destacada
    }
}