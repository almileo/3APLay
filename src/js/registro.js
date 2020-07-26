import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css';
import { contains } from 'jquery';

let nombreRegistro = document.getElementById('nombre');
let apellidoRegistro = document.getElementById('apellido');
let emailRegistro = document.getElementById('email');
let usuarioRegistro = document.getElementById('usuario');
let contraseniaRegistro = document.getElementById('contrasenia');
let repetirRegistro = document.getElementById('repetirContrasenia');
let checkTerminos = document.getElementById('chkTerminos');

nombreRegistro.addEventListener('blur', nombre);
apellidoRegistro.addEventListener('blur', apellido);
emailRegistro.addEventListener('blur', email);
usuarioRegistro.addEventListener('blur', usuario);
contraseniaRegistro.addEventListener('blur', contrasenia);
repetirRegistro.addEventListener('blur', repetirContrasenia);
checkTerminos.addEventListener('change', chkTerminos);

// VALIDACION NOMBRE
function nombre() {
    if (nombreRegistro.value != "" && isNaN(nombreRegistro.value)) {
        nombreRegistro.className = "form-control is-valid";
        return true;
    } else {
        nombreRegistro.className = "form-control is-invalid";
        return false;
    }
}

// VALIDACION APELLIDO
function apellido() {
    if (apellidoRegistro.value != "" && isNaN(apellidoRegistro.value)) {
        apellidoRegistro.className = "form-control is-valid";
        return true;
    } else {
        apellidoRegistro.className = "form-control is-invalid";
        return false;
    }
}

// VALIDAR EMAIL
function email() {
    let expresion = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (emailRegistro.value != "" && expresion.test(emailRegistro.value)) {
        emailRegistro.className = "form-control is-valid";
        return true;
    } else {
        emailRegistro.className = "form-control is-invalid";
        return false;
    }
}

// VALIDAR USUARIO
function usuario() {
    let expresion = /[a-z]/;
    if (usuarioRegistro.value != "" && isNaN(usuarioRegistro.value) && expresion.test(usuarioRegistro.value)) {
        usuarioRegistro.className = "form-control is-valid";
        return true;
    } else {
        usuarioRegistro.className = "form-control is-invalid";
        return false;
    }
}

// VALIDAR CONTRASEÑA
let longitud = 8;
function contrasenia() {
    if (contraseniaRegistro.value.length >= longitud) {
        contraseniaRegistro.className = "form-control is-valid";
        return true;
    } else {
        contraseniaRegistro.className = "form-control is-invalid";
        return false;
    }
}

// VALIDAR REPETIR CONTRASEÑA
function repetirContrasenia() {
    if (repetirRegistro.value.length >= longitud && repetirRegistro.value == contraseniaRegistro.value) {
        repetirRegistro.className = "form-control is-valid";
        return true;
    } else {
        repetirRegistro.className = "form-control is-invalid";
        return false;
    }
}

// VALIDAR CHECKBOX
function chkTerminos() {
    if (checkTerminos.checked) {
        checkTerminos.className = "form-check-input is-valid";
        return true;
    } else {
        checkTerminos.className = "form-check-input is-invalid";
        return false;
    }
}

// VALIDACION GENERAL
window.enviarRegistro = function (event) {
    event.preventDefault();
    if (nombre() &&
        apellido() &&
        email() &&
        usuario() &&
        contrasenia() &&
        repetirContrasenia() &&
        chkTerminos()) {
        console.log("OK");
        enviarEmail();
    } else {
        console.log("ERROR!");
    }
}

// ENVIAR MAIL
function enviarEmail() {
    let template_params = {
        from_name: `${nombreRegistro.value} ${apellidoRegistro.value}`,
        message_html: `Nombre: ${nombreRegistro.value}<br>
        Apellido: ${apellidoRegistro.value}<br>
        Email: ${emailRegistro.value}<br>
        Usuario: ${usuarioRegistro.value}<br>
        Contraseña: ${contraseniaRegistro.value}<br>`
    }

    let service_id = "default_service";
    let template_id = "template_9MeIpA4X";
    emailjs.send(service_id, template_id, template_params).then(function (response) {
        console.log(response);
        document.getElementById('mjeEnvioDatos').className = 'alert colorAlerta my-4';
        document.getElementById('mjeEnvioDatos').innerText = 'Sus datos se enviaron correctamente.'
        document.getElementById('formRegistro').reset();
    },

        function (error) {
            console.log(error);
            document.getElementById(`msjEnvio`).className = `alert colorAlerta my-4`;
            document.getElementById(`msjEnvio`).innerText = `Ocurrió un error, inténtelo nuevamente en unos minutos.`;
        });
}
