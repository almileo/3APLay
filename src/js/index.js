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


    //Imagenes 
    for (let i in listaPeliculasSeries) {
      switch (listaPeliculasSeries[i].categoria) {
        case "Accion":
          if (listaPeliculasSeries[i].codigo == 1 || listaPeliculasSeries[i].codigo == 2 || listaPeliculasSeries[i].codigo == 3 || listaPeliculasSeries[i].codigo == 4) {
            codHTML = ` <div class="col-sm-3 my-2">
                                    <a href="error404.html"><img src="img/categorias/accion/${listaPeliculasSeries[i].imagen}" class="d-block w-100 rounded efectosImg" alt="Spider-man de regreso a casa"></a>
                                </div>`;

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











// let peliculas = [];

// let _peliculas = JSON.parse(localStorage.getItem('keyPelicula'));

// // peliculas = _peliculas;
// // filtrarDestacada();

// console.log(_peliculas)
// console.log(peliculas)

// FILTRAR LS
// let itemDestacado = peliculas.filter(function (item) {
//   return item.itemDestacado = true;
// })

// console.log(itemDestacado);



// INSERTAR DESTACADA EN SLIDER
// function insertarDestacadaSlider(peliculaDestacada) {
//   console.log("desde dentro de insertarDestacadaSlider");
//   console.log(peliculaDestacada);

//   console.log(peliculaDestacada.nombre)

// }

