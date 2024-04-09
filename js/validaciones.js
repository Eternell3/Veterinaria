




//VALIDAR CAMPOS DE LA WEB registroUsuario.php

function validarRegistro() {


    //const idPropietario = document.getElementById("codigopropietario").value;
    const rutPropietario = document.getElementById("rut").value;
    const nombrePropietario = document.getElementById("nombre").value;
    const apellidoPropietario = document.getElementById("apellido").value;
    const fechaNacimientoPropietario = document.getElementById("fecha").value;
    const direccionPropietario = document.getElementById("direccion").value;
    const telefono = document.getElementById("telefono").value;
    const idRegion = document.getElementById("region").value;
    const idProvincia = document.getElementById("provincia").value;
    const idComuna = document.getElementById("comuna").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;


    if (rutPropietario.length == 0) {

        alert("Ingrese rut");
        return false;

    } else if (validarFormatoRut(rutPropietario) == false) {

        alert("Ingrese un rut Valido");
        return false;

    } else if (nombrePropietario.length == 0) {

        alert("Ingrese nombre");
        return false;

    } else if (apellidoPropietario.length == 0) {

        alert("Ingrese Apellido");
        return false;

    } else if (fechaNacimientoPropietario.length == 0) {

        alert("Ingrese fecha de nacimiento");
        return false;

    } else if (direccionPropietario.length == 0) {

        alert("Ingrese dirección");
        return false;

    } else if (telefono.length == 0) {

        alert("Ingrese teléfono");
        return false;


    } else if (idRegion == 0) {

        alert("Seleccione una región");
        return false;

    } else if (idProvincia == 0) {

        alert("Seleccione una provincia");
        return false;

    } else if (idComuna == 0) {

        alert("Seleccione una comuna");
        return false;

    } else if (password.length == 0) {

        alert("ingrese una contraseña");
        return false;

    } else if (email.length == 0) {

        alert("ingrese un correo electrónico");
        return false;


    } else {
        return true;
    }

}