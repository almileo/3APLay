import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css';
import Swal from 'sweetalert2';
import $ from 'jquery';

let user = document.getElementById('nombreLogin');
let clave = document.getElementById('passwLogin');
let correo = document.getElementById('emailRec');

user.addEventListener('blur', usuario);
clave.addEventListener('blur', password);
correo.addEventListener('blur', recEmail);

//validar usuario
function usuario() {
    let expresion = /[a-z]/;
    if (user.value != "" && isNaN(user.value) && expresion.test(user.value)) {
        user.className = "form-control is-valid";
        return true;
    } else {
        user.className = "form-control is-invalid";
        return false;
    }
}

//validar contraseña
function password() {
    const longitud = 8;
    if (clave.value.length >= longitud) {
        clave.className = "form-control is-valid";
        return true;
    } else {
        clave.className = "form-control is-invalid";
        return false;
    }
}

// VALIDAR EMAIL DE MODAL RECUPERAR CONTRASEÑA
function recEmail() {
    let emailExpre = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if (correo.value != "" && emailExpre.test(correo.value)) {
        correo.className = "form-control is-valid";
        return true;
    } else {
        correo.className = "form-control is-invalid";
        return false;
    }
}

// VALIDACION GENERAL
window.admin = function (event) {
    event.preventDefault();
    if (usuario() &&
        password()) {
        validarCuentaAdmin(event);
    }
}

// VALIDAR EMAIL DE RECUPERO PASS
window.recuperoEmail = function (event) {
    event.preventDefault();
    if (recEmail()) {
        let modalRecuperoContrasenia = document.getElementById('modalRecuperoContrasenia');
        Swal.fire(
            'Perfecto!',
            'Tus datos se enviaron correctamente!',
            'success'
        );
        $(modalRecuperoContrasenia).modal('hide');
    }
}

// VALIDAR ADMIN E IR A admin.html
function validarCuentaAdmin(event) {
    event.preventDefault();
    let userAdm = "admin-play";
    let passAdm = "rolling2020";
    if (user.value == userAdm && clave.value == passAdm) {
        window.location.replace("./admin.html");
    } else {
        user.className = "form-control";
        clave.className = "form-control";
        Swal.fire({
            icon: 'error',
            title: 'Tus datos son incorrectos.',
            text: 'Por favor, procure escribir los datos requeridos de manera correcta.',
        });
    };
}
