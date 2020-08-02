import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/style.css';
import Swal from 'sweetalert2';

let user = document.getElementById('nombreLogin')
let clave = document.getElementById('passwLogin')
let correo = document.getElementById('emailRec')

user.addEventListener('blur', usuario)
clave.addEventListener('blur', password)
correo.addEventListener('blur', recEmail)

//validar usuario
 function usuario(){
    let expresion = /[a-z]/
     if(user.value != "" && isNaN(user.value) && expresion.test(user.value)){
         user.className = "form-control is-valid"
     }else{
         user.className = "form-control is-invalid"
     }
 }

 //validar contraseña
 function password(){
     let caracteres =8;
     if(clave.value.length >= caracteres){
        clave.className = "form-control is-valid"
     }else{
        clave.className = "form-control is-invalid"
     }
 }

 //validar email de modal recuperar contraseña
 function recEmail(){
     let emailExpre = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
     if(correo.value != emailExpre.test(correo.value)){
         correo.className = "form-control is-valid"
     }else{
         correo.className= "form-control is-invalid"
     }
 }

 //ingresar como administrador e ir a admin.html
 window.admin = function(event){
     event.preventDefault()
     let userAdm = "admin-play"
     let passAdm = "rolling2020"
     if(user.value == userAdm && clave.value == passAdm){
         window.location.replace("./admin.html")
     }else{
        Swal.fire({
            icon: 'error',
            title: 'El usuario que ingresó no existe.',
            text: 'Por favor, procure escribir los datos requeridos de manera correcta.',
        })
     }
 }
 