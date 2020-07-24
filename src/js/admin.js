import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../css/style.css";
import Pelicula from "./pelicula.js";
import $ from "jquery"

let peliculas = [];
let codigo = document.getElementById("codigoAgregar");
let nombre = document.getElementById("nombreAgregar");
let categoria = document.getElementById("categoriaAgregar");
let descripcion = document.getElementById("descripcionAgregar");
let imagen = document.getElementById("imagenAgregar");
let modalPelicula = document.getElementById("modalPelicula");

leerPeliculas();

window.agregarPelicula = function (event) {
  event.preventDefault();
  console.log("Hola, funciono");

  //validacion para agregar
  if (
    validaCampo(codigo) &&
    validaCampo(nombre) &&
    validaCampo(categoria) &&
    validaCampo(descripcion) &&
    validaCampo(imagen)
  ) {
    //crear el objeto
    let objetoPelicula = new Pelicula(
      codigo.value,
      nombre.value,
      categoria.value,
      descripcion.value,
      imagen.value
    );
    console.log(objetoPelicula);

    //guardo en el Array
    peliculas.push(objetoPelicula);

    //array al LocalStorage
    localStorage.setItem("keyPelicula", JSON.stringify(peliculas));

    //limpiar formulario
    document.getElementById("formAgregar").reset();

    leerPeliculas();

    $(modalPelicula).modal("hide");
  }
};

//funcion que valida campos
window.validaCampo = function (input) {
  if (input.value == "") {
    input.className = "form-control is-invalid";
    return false;
  } else {
    input.className = "form-control is-valid";
    return true;
  }
};

function leerPeliculas() {
  //lee datos del LocalStorage
  if (localStorage.length > 0) {
    let _peliculas = JSON.parse(localStorage.getItem("keyPelicula"));

    if(peliculas.length == 0){
        peliculas = _peliculas;
    }
    //borrar filas
    borrarFila();

    //dibujas filas de la tabla
    dibujarFila(_peliculas);
  }
}

//funcion para crear la tabla
function dibujarFila(_peliculas) {
  let tbody = document.getElementById("listaPeliculas");
  let codHTML = "";
  for (let i in _peliculas) {
    codHTML = `<tr class="txtPagAdmin">
        <th scope="row">${_peliculas[i].codigo}</th>
        <td>${_peliculas[i].nombre}</td>
        <td>${_peliculas[i].categoria}</td>
        <td>${_peliculas[i].descripcion}</td>
        <td>${_peliculas[i].imagen}</td>
        <td>Si</td>
        <td>
            <button class="btn btn-outline-primary" onclick="" id="editar"><i class="fas fa-edit"></i></button>
            <button class="btn btn-outline-warning my-1" onclick="" id="favorito"><i class="fas fa-star"></i></i></button>
            <button class="btn btn-outline-danger" onclick="eliminarPelicula(this)" id="${_peliculas[i].codigo}"><i class="fas fa-trash-alt"></i></button>
        </td>
    </tr>`;

    tbody.innerHTML += codHTML;
  }
}

function borrarFila(){
    let tbody = document.getElementById("listaPeliculas");
    if(tbody.children.length > 0){
        while(tbody.firstChild){
            tbody.removeChild(tbody.firstChild);
        }
    }  
}

window.eliminarPelicula = function (movie){
  console.log(movie);

}