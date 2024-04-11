




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

        alert("Ingrese formato permitido para el rut");
        return false;

    } else if (validarRut(rutPropietario) == false) {

        alert("Ingrese un rut valido");
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


// FUNCION QUE VERIFICA SI UN RUT YA EXISTE EN LA BASE O NO PARA EVITAR DUPLICADOS DE INFORMACION
rut.addEventListener("input", function () {

    const rut = document.getElementById("rut").value;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "../php/registrosBDD.php?cmd=validarRutDuplicados&rut=" + rut);

    xhr.send();

    xhr.onload = function () {

        if (xhr.status != 200) {
            alert(xhr.status + ":" + xhr.responseText);

        } else {
            const data = JSON.parse(xhr.responseText);

            if (data.status === 'true') {

                alert(data.message);
                document.getElementById("rut").value = '';
            
            }

        }
    };

    xhr.onerror = function () {

        alert("No fue posible recuperar las validaciones del rut");
    }


})



// FUNCION QUE VERIFICA SI UN CORREO YA EXISTE EN LA BASE O NO PARA EVITAR DUPLICADOS DE INFORMACION
email.addEventListener("input", function () {

    const email = document.getElementById("email").value;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "../php/registrosBDD.php?cmd=validarCorreoDuplicados&email=" + email);

    xhr.send();

    xhr.onload = function () {

        if (xhr.status != 200) {
            alert(xhr.status + ":" + xhr.responseText);

        } else {
            const data = JSON.parse(xhr.responseText);

            if (data.status === 'true') {

                alert(data.message);
                document.getElementById("email").value = '';
            
            }

        }
    };

    xhr.onerror = function () {

        alert("No fue posible recuperar las validaciones del rut");
    }


})


