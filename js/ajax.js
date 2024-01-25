

// FUNCION QUE PERMITE INSCRIBIR (AGREGAR A LA BASE DE DATOS) A UN NUEVO PROPIETARIO DE MASCOTA 

function inscribirPropietario() {


    const idPropietario = 0;
    const rutPropietario = '19153970-2';
    const nombrePropietario = 'ignacio';
    const apellidoPropietario = 'Castro';
    const fechaNacimientoPropietario = '02-05-1996';
    const direccionPropietario = 'santiago 99';
    const telefono = '964136380';
    const idRegion = 1;
    const idProvincia = 1;
    const idComuna = 1;
    const password = 'S4r4t0g4123';
    const email = 'money_hockey@hotmail.com';






    const xhr = new XMLHttpRequest();
    xhr.open("POST", "../php/insertar.php?cmd=propietario&idPropietario=" + idPropietario
        + "&rutPropietario=" + rutPropietario
        + "&nombrePropietario=" + nombrePropietario
        + "&apellidoPropietario=" + apellidoPropietario
        + "&fechaNacimientoPropietario=" + fechaNacimientoPropietario
        + "&direccionPropietario=" + direccionPropietario
        + "&telefono=" + telefono
        + "&idRegion=" + idRegion
        + "&idProvincia=" + idProvincia
        + "&idComuna=" + idComuna
        + "&password=" + password
        + "&email=" + email);

    xhr.send();

    xhr.onload = function () {

        if (xhr.status != 200) {
            alert(xhr.status + ":" + xhr.responseText);

        } else {
  
            const data = JSON.parse(xhr.responseText);

            if (data.status === 'success') {

                alert(data.resultados);

            } else{
                alert(data.message);

            }

        }

    };

    xhr.onerror = function () {

        alert("Petición realizada no fue exitosa.");
    }

}



// FUNCION QUE PERMITE VALIDAR LAS CREDENCIALES DE USUARIO PARA EL LOGIN

function validarUsuario() {


    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;





    const xhr = new XMLHttpRequest();
    xhr.open("POST", "../php/insertar.php?cmd=validarUsuario&email=" + usuario+ "&password=" + password
       );

    xhr.send();

    xhr.onload = function () {

        if (xhr.status != 200) {
            alert(xhr.status + ":" + xhr.responseText);

        } else {
  
            const data = JSON.parse(xhr.responseText);

            if (data.status === 'success') {

                alert(data.resultados);

            } else{
                alert(data.message);

            }

        }

    };

    xhr.onerror = function () {

        alert("Petición realizada no fue exitosa.");
    }

}