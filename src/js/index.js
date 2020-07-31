import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../css/style.css";

leerPeliculas();

function leerPeliculas() {
  if (localStorage.length > 0) {
    let listaPeliculasSeries = JSON.parse(localStorage.getItem("keyPelicula"));

    let imagenesPeliculas = document.getElementById("imagenesAccion");
    let imagenesPeliculasDos = document.getElementById("imagenesAccionDos");

    let codHTML = "";

    for (let i in listaPeliculasSeries) {
        if (i < 4){
            codHTML = ` <div class="col-sm-3 my-2">
                            <a href="error404.html"><img src="img/categorias/accion/${listaPeliculasSeries[i].imagen}" class="d-block w-100 rounded efectosImg" alt="Spider-man de regreso a casa"></a>
                        </div>`;

        imagenesPeliculas.innerHTML += codHTML;  
        }   
        
        if (i > 3 && i < 8){
            codHTML = ` <div class="col-sm-3 my-2">
                            <a href="error404.html"><img src="img/categorias/accion/${listaPeliculasSeries[i].imagen}" class="d-block w-100 rounded efectosImg" alt="Spider-man de regreso a casa"></a>
                        </div>`;

        imagenesPeliculasDos.innerHTML += codHTML; 
        }
    } 
  }
}




