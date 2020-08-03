import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../css/style.css";
import Pelicula from "./pelicula.js";
import $ from "jquery";
import Swal from "sweetalert2";


let peliculas = [];
let codigo = document.getElementById("codigoAgregar");
let nombre = document.getElementById("nombreAgregar");
let categoria = document.getElementById("categoriaAgregar");
let descripcion = document.getElementById("descripcionAgregar");
let imagen = document.getElementById("imagenAgregar");
let modalPelicula = document.getElementById("modalPelicula");
let peliculaExistente = false; //variable bandera en false es una peli nueva. Si es true es una peli a editar

leerPeliculas();

window.agregarPelicula = function (event) {
  event.preventDefault();

  //crear el objeto
  let objetoPelicula = new Pelicula(
    codigo.value,
    nombre.value,
    categoria.value,
    descripcion.value,
    imagen.value
  );

  //guardo en el Array
  peliculas.push(objetoPelicula);

  //array al LocalStorage
  localStorage.setItem("keyPelicula", JSON.stringify(peliculas));

  //limpiar formulario
  limpiarFormulario();

  leerPeliculas();

  $(modalPelicula).modal("hide");

  Swal.fire(
    'Bien!',
    'Agregaste una pelicula/serie nueva',
    'success'
  )
};

//funcion que valida código
window.validaCodigo = function (codigo) {
  let quitarEspacios = / /;
  if (codigo.value != "" && !isNaN(codigo.value) && !quitarEspacios.test(codigo.value)) {
    codigo.className = 'form-control is-valid';
    return true;
  } else {
    codigo.className = 'form-control is-invalid';
    return false;
  }
}

window.validaTexto = function (texto) {
  if (texto.value != "" && isNaN(texto.value)) {
    texto.className = "form-control is-valid";
    return true;
  } else {
    texto.className = "form-control is-invalid";
    return false;
  }
}

window.validaImagen = function (nombreImagen) {
  let quitarEspacios = / /;
  let expresion = /[a-z]+\.+(jpeg|jpg|png)/;
  if (isNaN(nombreImagen.value) && expresion.test(nombreImagen.value) && !quitarEspacios.test(nombreImagen.value)) {
    nombreImagen.className = 'form-control is-valid';
    return true;
  } else {
    nombreImagen.className = 'form-control is-invalid';
    return false;
  }
}

function leerPeliculas() {

  //lee datos del LocalStorage
  if (localStorage.length > 0) {
    let _peliculas = JSON.parse(localStorage.getItem("keyPelicula"));

    if (peliculas.length == 0) {
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
    if (_peliculas[i].itemDestacado == true) {

      console.log("desde dentro de PELICULA DESTACADA TRUE");
      codHTML = `<tr class="txtPagAdmin">
        <th scope="row" class="text-center">${_peliculas[i].codigo}</th>
        <td>${_peliculas[i].nombre}</td>
        <td>${_peliculas[i].categoria}</td>
        <td>${_peliculas[i].descripcion}</td>
        <td>${_peliculas[i].imagen}</td>
        <td><input type="checkbox"  id="${_peliculas[i].codigo}" onclick="peliculaPublicada(${_peliculas[i].codigo})">
        </td>
        <td>
            <button class="btn btn-outline-primary" onclick="editarPelicula(${_peliculas[i].codigo})" id="editar"><i class="fas fa-edit"></i></button>
            <button class="btn btn-outline-warning my-1" onclick="peliculaDestacada(${_peliculas[i].codigo})" id="${_peliculas[i].codigo}"><i class="fas fa-star"></i></i></button>
            <button class="btn btn-outline-danger" onclick="eliminarPelicula(this)" id="${_peliculas[i].codigo}"><i class="fas fa-trash-alt"></i></button>
        </td>
    </tr>`;

    } else {

      console.log("desde dentro de PELICULA DESTACADA FALSE");
      codHTML = `<tr class="txtPagAdmin">
        <th scope="row" class="text-center">${_peliculas[i].codigo}</th>
        <td>${_peliculas[i].nombre}</td>
        <td>${_peliculas[i].categoria}</td>
        <td>${_peliculas[i].descripcion}</td>
        <td>${_peliculas[i].imagen}</td>
        <td><input type="checkbox"  id="${_peliculas[i].codigo}" onclick="peliculaPublicada(${_peliculas[i].codigo})">
        </td>
        <td>
            <button class="btn btn-outline-primary" onclick="editarPelicula(${_peliculas[i].codigo})" id="editar"><i class="fas fa-edit"></i></button>
            <button class="btn btn-outline-secondary my-1" onclick="peliculaDestacada(${_peliculas[i].codigo})" id="${_peliculas[i].codigo}"><i class="fas fa-star"></i></i></button>
            <button class="btn btn-outline-danger" onclick="eliminarPelicula(this)" id="${_peliculas[i].codigo}"><i class="fas fa-trash-alt"></i></button>
        </td>
    </tr>`;
    }  

    tbody.innerHTML += codHTML;
  }


}


// SELECCION DE PELICULA DESTACADA (CLICK)
window.peliculaDestacada = function (codigo) {
  // PELICULA SELECCIONADA
  peliculaSeleccionada(codigo);

  // LEER FILAS
  leerPeliculas();
}

// FUNCION PARA ENCONTRAR PELICULA SELECCIONADA
function peliculaSeleccionada(codigo) {
  // GUARDAR CODIGO DE DESTACADO EN LS
  for (let i in peliculas) {
    if (peliculas[i].codigo == codigo && peliculas[i].itemDestacado == false) {
      peliculas[i].itemDestacado = true;
    } else {
      peliculas[i].itemDestacado = false;
    }
  }

  localStorage.setItem("keyPelicula", JSON.stringify(peliculas));
}

function borrarFila() {
  let tbody = document.getElementById("listaPeliculas");
  if (tbody.children.length > 0) {
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
  }
}

//funcion para borrar pelicula
window.eliminarPelicula = function (movie) {
  Swal.fire({
    title: 'Estas seguro de eliminar esta pelicula/serie?',
    text: "Esta operacion no se puede deshacer.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#00a8b1',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Eliminar'
  }).then((result) => {
    if (result.value) {
      let arregloFiltrado = peliculas.filter(function (item) {
        return item.codigo != movie.id;
      });

      localStorage.setItem("keyPelicula", JSON.stringify(arregloFiltrado));
      peliculas = arregloFiltrado;
      leerPeliculas();

      console.log(arregloFiltrado);

      Swal.fire(
        'Pelicula/serie eliminada.',
        'El archivo fue eliminado con éxito.',
        'success'
      )
    }
  })
};

//funcion para editar peliculas
window.editarPelicula = function (codigo) {

  //buscar pelicula por codigo
  let objetoEncontrado = peliculas.find(function (objetoPeli) {
    return objetoPeli.codigo == codigo;
  });

  //cargar el modal con los datos del objeto que quiero editar
  document.getElementById("codigoAgregar").value = objetoEncontrado.codigo;
  document.getElementById("nombreAgregar").value = objetoEncontrado.nombre;
  document.getElementById("categoriaAgregar").value = objetoEncontrado.categoria;
  document.getElementById("descripcionAgregar").value = objetoEncontrado.descripcion;
  document.getElementById("imagenAgregar").value = objetoEncontrado.imagen;

  //cambia valor variable bandera
  peliculaExistente = true;

  //abrir la ventana modal
  $(modalPelicula).modal("show");
};

window.guardarDatos = function (event) {
  event.preventDefault();
  //agrego validaciones
  if (
    validaCodigo(codigo) &&
    validaTexto(nombre) &&
    validaTexto(categoria) &&
    validaTexto(descripcion) &&
    validaImagen(imagen)
  ) {
    if (peliculaExistente == false) {
      //agrega una nueva peli
      agregarPelicula(event);
    } else {
      //modifica una peli que ya existe
      peliculaEditada(event);
    }
  } else {
    alert("Te faltan completar algunos datos");
  }
};

function peliculaEditada(event) {
  event.preventDefault()
  //tomar los nuevos datos
  codigo = document.getElementById("codigoAgregar").value;
  nombre = document.getElementById("nombreAgregar").value;
  categoria = document.getElementById("categoriaAgregar").value;
  descripcion = document.getElementById("descripcionAgregar").value;
  imagen = document.getElementById("imagenAgregar").value;

  //actualizar esos datos en el arreglo
  for (let i in peliculas) {
    if (peliculas[i].codigo == codigo) {
      peliculas[i].nombre = nombre;
      peliculas[i].categoria = categoria;
      peliculas[i].descripcion = descripcion;
      peliculas[i].imagen = imagen;
    }
  }

  //actualizar el LocalStorage
  localStorage.setItem("keyPelicula", JSON.stringify(peliculas));

  limpiarFormulario();

  //dibujar de nuevo la tabla
  leerPeliculas();

  //cerrar ventana modal
  $(modalPelicula).modal("hide");
}

window.limpiarFormulario = function () {
  document.getElementById("formAgregar").reset();
  codigo.className = 'form-control';
  nombre.className = 'form-control';
  categoria.className = 'form-control';
  descripcion.className = 'form-control';
  imagen.className = 'form-control';
  peliculaExistente = false;
};


//CheckBox publicar
// SELECCION DE PELICULA publicada (CLICK)
window.peliculaPublicada = function (codigo) {
  // PELICULA SELECCIONADA
  peliculaSeleccionadaPublicar(codigo);

  // LEER FILAS
  leerPeliculas();
}

// FUNCION PARA ENCONTRAR PELICULA SELECCIONADA
function peliculaSeleccionadaPublicar(codigo) {
  // GUARDAR CODIGO DE DESTACADO EN LS
  for (let i in peliculas) {

    if ((peliculas[i].codigo == codigo && peliculas[i].publicado == true)) {
      peliculas[i].publicado = false;
    } else {
      peliculas[i].publicado = true;
    }    
  }

  localStorage.setItem("keyPelicula", JSON.stringify(peliculas));
}



