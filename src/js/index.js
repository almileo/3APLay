import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../css/style.css";


leerPeliculas();

function leerPeliculas() {
  if (localStorage.length > 0) {
    let listaPeliculasSeries = JSON.parse(localStorage.getItem("keyPelicula"));

    let imagenesPeliculas = document.getElementById("imagenesAccion");
    let imagenesPeliculasDos = document.getElementById("imagenesAccionDos");
    let comedia = document.getElementById("imagenComedia");
    let comediaDos = document.getElementById("imagenComediaDos");
    let cienciaFiccion = document.getElementById("imagenCienciaFiccion");
    let cienciaFiccionDos = document.getElementById("imagenCienciaFiccionDos");
    let terror = document.getElementById("imagenTerror");
    let terrorDos = document.getElementById("imagenTerrorDos");

    let codHTML = "";


    //Agrega Imagenes automaticamente en cada categoria
    for (let i in listaPeliculasSeries) {
      switch (listaPeliculasSeries[i].categoria) {
        case "Accion":
          if (listaPeliculasSeries[i].codigo == 1 || listaPeliculasSeries[i].codigo == 2 || listaPeliculasSeries[i].codigo == 3 || listaPeliculasSeries[i].codigo == 4) {
            codHTML = ` <div class="col-sm-3 my-2">
                                    <a href="error404.html"><img src="img/categorias/accion/${listaPeliculasSeries[i].imagen}" class="d-block w-100 rounded efectosImg" alt="Spider-man de regreso a casa"></a>
                                </div>
                                `;

            imagenesPeliculas.innerHTML += codHTML;
          }

          if (listaPeliculasSeries[i].codigo == 5 || listaPeliculasSeries[i].codigo == 6 || listaPeliculasSeries[i].codigo == 7 || listaPeliculasSeries[i].codigo == 8) {
            codHTML = ` <div class="col-sm-3 my-2">
                                    <a href="error404.html"><img src="img/categorias/accion/${listaPeliculasSeries[i].imagen}" class="d-block w-100 rounded efectosImg" alt="Spider-man de regreso a casa"></a>
                                </div>`;

            imagenesPeliculasDos.innerHTML += codHTML;
          }
          break;

        case "Comedia":
          if (listaPeliculasSeries[i].codigo == 9 || listaPeliculasSeries[i].codigo == 10 || listaPeliculasSeries[i].codigo == 11 || listaPeliculasSeries[i].codigo == 12) {
            codHTML = ` <div class="col-sm-3 my-2">
                                     <a href="error404.html"><img src="img/categorias/comedia/${listaPeliculasSeries[i].imagen}" class="d-block w-100 rounded efectosImg" alt="Ahora son trece"></a>
                                </div>`;

            comedia.innerHTML += codHTML;
          }

          if (listaPeliculasSeries[i].codigo == 13 || listaPeliculasSeries[i].codigo == 14 || listaPeliculasSeries[i].codigo == 15 || listaPeliculasSeries[i].codigo == 16) {
            codHTML = ` <div class="col-sm-3 my-2">
                                    <a href="error404.html"><img src="img/categorias/comedia/${listaPeliculasSeries[i].imagen}" class="d-block w-100 rounded efectosImg" alt="Ahora son trece"></a>
                                </div>`;

            comediaDos.innerHTML += codHTML;
          }
          break;

        case "Ciencia Ficcion":
          if (listaPeliculasSeries[i].codigo == 17 || listaPeliculasSeries[i].codigo == 18 || listaPeliculasSeries[i].codigo == 19 || listaPeliculasSeries[i].codigo == 20) {
            codHTML = ` <div class="col-sm-3 my-2">
                                    <a href="error404.html"><img src="img/categorias/ficcion/${listaPeliculasSeries[i].imagen}" class="d-block w-100 rounded efectosImg" alt="Chappie"></a>
                                </div>`;

            cienciaFiccion.innerHTML += codHTML;
          }

          if (listaPeliculasSeries[i].codigo == 21 || listaPeliculasSeries[i].codigo == 22 || listaPeliculasSeries[i].codigo == 23 || listaPeliculasSeries[i].codigo == 24) {
            codHTML = ` <div class="col-sm-3 my-2">
                                    <a href="error404.html"><img src="img/categorias/ficcion/${listaPeliculasSeries[i].imagen}" class="d-block w-100 rounded efectosImg" alt="Chappie"></a>
                                </div>`;

            cienciaFiccionDos.innerHTML += codHTML;
          }
          break;

        case "Terror":
          if (listaPeliculasSeries[i].codigo == 25 || listaPeliculasSeries[i].codigo == 26 || listaPeliculasSeries[i].codigo == 27 || listaPeliculasSeries[i].codigo == 28) {
            codHTML = ` <div class="col-sm-3 my-2">
            <a href="error404.html"><img src="img/categorias/terror/${listaPeliculasSeries[i].imagen}" class="d-block w-100 rounded efectosImg" alt="Dulce Venganza"></a>
        </div>`;

            terror.innerHTML += codHTML;
          }

          if (listaPeliculasSeries[i].codigo == 29 || listaPeliculasSeries[i].codigo == 30 || listaPeliculasSeries[i].codigo == 31 || listaPeliculasSeries[i].codigo == 32) {
            codHTML = ` <div class="col-sm-3 my-2">
                                    <a href="error404.html"><img src="img/categorias/terror/${listaPeliculasSeries[i].imagen}" class="d-block w-100 rounded efectosImg" alt="Dulce Venganza"></a>
                                </div>`;

            terrorDos.innerHTML += codHTML;
          }
          break;
      }
    }
  }
}


itemDestacado();

let peliculas = [];

function itemDestacado() {

  // VERIFICAR SI HAY DATOS EN LS
  if (localStorage.length > 0) {

    // TRAER DATOS DE LS
    let _peliculas = JSON.parse(localStorage.getItem('keyPelicula'));
    console.log(_peliculas);

    let itemDestacado = _peliculas.filter(function (item) {
      return item.itemDestacado == true;
    });

    peliculas = itemDestacado;
    if (peliculas != 0) {
      // REEMPLAZAR DESTACADA
      console.log(peliculas[0]);
      let datosDestacada = document.getElementById('principal');
      let codHTML = `<div class="col-sm-12 col-md-5 position-absolute my-4 px-4" id="datosDestacada">
          <h2 class="display-3 fondoOscuro" id="tituloDestacada">${peliculas[0].nombre}</h2>
          <p class="lead my-4 fondoOscuro d-none d-lg-block" id="descriptionDestacada">${peliculas[0].descripcion}</p>
          <a href="error404.html" class="btn btn-destacada my-4 d-none d-lg-block"><i class="fas fa-play mr-3"></i>Reproducir</a>
        </div>
        <div>
            <img src="img/destacadas/${peliculas[0].imagen}" id="imagenDestacada" class="w-100" alt="${peliculas[0].nombre}">
        </div>`;

      datosDestacada.innerHTML = codHTML;

    } else {
      console.log("NO hay item destacado");
    }
  }
}

//Buscador de peliuclas/serie
let listaPeliculasSeries = JSON.parse(localStorage.getItem("keyPelicula"));
let busqueda = document.getElementById("buscador");

let resultado = document.getElementById("resultados");

function filtrar() {
  resultado.innerHTML = "";
  console.log(busqueda.value);
  let texto = busqueda.value.toLowerCase();
  for (let titulo of listaPeliculasSeries) {
    let nombre = titulo.nombre.toLowerCase();
    if (nombre.indexOf(texto) !== -1) {
      resultado.innerHTML += `<a href="error404.html" class="list-group-item list-group-item-action w-25">${titulo.nombre}</a>`
    }
  }
  if (resultado.innerHTML == "") {
    resultado.innerHTML += `<li class="list-group-item text-dark w-25">No encontramos esa peliucla/serie</li>`
  }

}

busqueda.addEventListener("keyup", filtrar);
botonLimpiar.addEventListener("click", limpiarBusqueda);

function limpiarBusqueda() {
  resultado.innerHTML = "";

}

//filtro por categorias
let filtroAccion = document.getElementById("filtroAccion");
let filtroComedia = document.getElementById("filtroComedia");
let filtroCienciaFiccion = document.getElementById("filtroCienciaFiccion");
let filtroTerror = document.getElementById("filtroTerror");


window.filtraCat = function(){
  if(filtroAccion.checked || filtroComedia.checked || filtroCienciaFiccion.checked || filtroTerror.checked ){
    alert("filtra y todo");
  }
}

