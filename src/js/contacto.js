import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css';
import { contains } from 'jquery';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

let nombre = document.getElementById("nombreContacto");
let apellido = document.getElementById("apellidoContacto");
let email = document.getElementById("emailContacto");
let consulta = document.getElementById("consultaContacto");

nombre.addEventListener("blur", nombreContacto);
apellido.addEventListener("blur", apellidoContacto);
email.addEventListener("blur", emailContacto);
consulta.addEventListener("blur", consultaContacto);

//Validar nombre
function nombreContacto() {
    let expresion = /[a-z]/;
    if (nombre.value != "" && isNaN(nombre.value) && expresion.test(nombre.value)) {
        nombre.className = "form-control is-valid";
        return true;
    } else {
        nombre.className = "form-control is-invalid";
        return false;
    }
}

//Validar apellido
function apellidoContacto() {
    let expresion = /[a-z]/;
    if (apellido.value != "" && isNaN(apellido.value) && expresion.test(nombre.value)) {
        apellido.className = "form-control is-valid";
        return true;
    } else {
        apellido.className = "form-control is-invalid";
        return false;
    }
}

//Validar email
function emailContacto() {
    let expresion = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (email.value != "" && expresion.test(email.value)) {
        email.className = "form-control is-valid";
        return true;
    } else {
        email.className = "form-control is-invalid";
        return false;
    }
}

//Validar consulta
function consultaContacto() {
    if (consulta.value.length >= 20) {
        consulta.className = "form-control is-valid";
        return true;
    } else {
        consulta.className = "form-control is-invalid";
        return false;
    }
}

// Validación general
window.enviarContacto = function (event) {
    event.preventDefault();
    if (
        nombreContacto() &&
        apellidoContacto() &&
        emailContacto() &&
        consultaContacto()
    ) {
        console.log("OK");
        // enviarMail();
    } else {
        console.log("ERROR!");
    }
};

// Enviar email
function enviarMail() {
    let template_params = {
        from_name: `${nombre.value} ${apellido.value}`,
        message_html: `Nombre: ${nombre.value}<br>
        Apellido: ${apellido.value}<br>
        Email: ${email.value}<br>
        Consulta: ${consulta.value}<br>`
    }

    let service_id = "default_service";
    let template_id = "template_9MeIpA4X";
    emailjs.send(service_id, template_id, template_params, (function () {
        emailjs.init("user_QsPhGrQDOyU9IjYtA4IHQ");
    })()).then(function (response) {
        console.log(response);
        document.getElementById('formRegistro').reset();
        Swal.fire(
            'Perfecto!',
            'Tu mensaje se envió correctamente!',
            'success'
        );
    },

        function (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo sucedió! Prueba nuevamente en unos minutos.',
            })
        });
}