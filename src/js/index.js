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
    //Imagenes de Accion
    for (let i in listaPeliculasSeries) {
    }
    // Imagenes de Comedia
    for (let i in listaPeliculasSeries) {
    }
    //Imagenes Ciencia Ficcion
    for (let i in listaPeliculasSeries) {
      switch (listaPeliculasSeries[i].categoria) {
        case "Accion":
          codHTML = ` <div class="col-sm-3 my-2">
                                    <a href="error404.html"><img src="img/categorias/accion/${listaPeliculasSeries[i].imagen}" class="d-block w-100 rounded efectosImg" alt="Spider-man de regreso a casa"></a>
                                </div>`;

          imagenesPeliculas.innerHTML += codHTML;

          codHTML = ` <div class="col-sm-3 my-2">
                                    <a href="error404.html"><img src="img/categorias/accion/${listaPeliculasSeries[i].imagen}" class="d-block w-100 rounded efectosImg" alt="Spider-man de regreso a casa"></a>
                                </div>`;

          imagenesPeliculasDos.innerHTML += codHTML;

          break;

        case "Comedia":
          codHTML = ` <div class="col-sm-3 my-2">
                                     <a href="error404.html"><img src="img/categorias/comedia/${listaPeliculasSeries[i].imagen}" class="d-block w-100 rounded efectosImg" alt="Ahora son trece"></a>
                                </div>`;

          comedia.innerHTML += codHTML;

          codHTML = ` <div class="col-sm-3 my-2">
                                    <a href="error404.html"><img src="img/categorias/comedia/${listaPeliculasSeries[i].imagen}" class="d-block w-100 rounded efectosImg" alt="Ahora son trece"></a>
                                </div>`;

          comediaDos.innerHTML += codHTML;

          break;

        case "Ciencia Ficcion":
          codHTML = ` <div class="col-sm-3 my-2">
                                    <a href="error404.html"><img src="img/categorias/ficcion/${listaPeliculasSeries[i].imagen}" class="d-block w-100 rounded efectosImg" alt="Chappie"></a>
                                </div>`;

          cienciaFiccion.innerHTML += codHTML;

          codHTML = ` <div class="col-sm-3 my-2">
                                    <a href="error404.html"><img src="img/categorias/ficcion/${listaPeliculasSeries[i].imagen}" class="d-block w-100 rounded efectosImg" alt="Chappie"></a>
                                </div>`;

          cienciaFiccionDos.innerHTML += codHTML;

          break;

        case "Terror":
          codHTML = ` <div class="col-sm-3 my-2">
                                    <a href="error404.html"><img src="img/categorias/terror/${listaPeliculasSeries[i].imagen}" class="d-block w-100 rounded efectosImg" alt="Dulce Venganza"></a>
                                </div>`;

          terror.innerHTML += codHTML;

          codHTML = ` <div class="col-sm-3 my-2">
                                    <a href="error404.html"><img src="img/categorias/terror/${listaPeliculasSeries[i].imagen}" class="d-block w-100 rounded efectosImg" alt="Dulce Venganza"></a>
                                </div>`;

          terrorDos.innerHTML += codHTML;

          break;
      }
    }
    // Imagenes Terror
    for (let i in listaPeliculasSeries) {
    }
  }
}
