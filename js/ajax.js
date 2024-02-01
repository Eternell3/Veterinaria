llamarRegiones();

// FUNCION QUE PERMITE INSCRIBIR (AGREGAR A LA BASE DE DATOS) A UN NUEVO PROPIETARIO DE MASCOTA 

function inscribirPropietario() {


    const idPropietario = document.getElementById("codigopropietario").value;
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

    // FORMATEAR LA FECHA YYYY-MM-DD

    const fechaformatter = new Date(fechaNacimientoPropietario);
    const dia = fechaformatter.getDate();
    const mes = fechaformatter.getMonth() + 1;
    const anio = fechaformatter.getFullYear();
    const fecha = `${anio}/${mes}/${dia}`;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "../php/insertar.php?cmd=propietario&idPropietario=" + idPropietario
        + "&rutPropietario=" + rutPropietario
        + "&nombrePropietario=" + nombrePropietario
        + "&apellidoPropietario=" + apellidoPropietario
        + "&fechaNacimientoPropietario=" + fecha
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

            } else {
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
    xhr.open("POST", "../php/insertar.php?cmd=validarUsuario&email=" + usuario + "&password=" + password
    );

    xhr.send();

    xhr.onload = function () {

        if (xhr.status != 200) {
            alert(xhr.status + ":" + xhr.responseText);

        } else {

            const data = JSON.parse(xhr.responseText);

            if (data.status === 'success') {

                alert(data.resultados);

            } else {
                alert(data.message);

            }
        }

    };

    xhr.onerror = function () {

        alert("Petición realizada no fue exitosa.");
    }

}



// LLAMAR REGIONES


function llamarRegiones() {

    //LLAMAR A CADA SELECT DEL HTML

    const selectRegiones = document.getElementById("region");
    const selectprovincias = document.getElementById("provincia");
    const selectcomunas = document.getElementById("comuna");

    //DEJAR POR DEFECTO LOS SELECT DE PROVINCIAS Y COMUNAS 
    selectprovincias.innerHTML = '<option value="0" selected>Seleccione</option>';
    selectcomunas.innerHTML = '<option value="0" selected>Seleccione</option>';

    //AGREGAR LA OPCION DE 'SELECCIONE' AL SELECT DE REGION
    let regionCarga = '<option value="0" selected>Seleccione</option>';

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "../php/listar.php?cmd=listarRegiones");

    xhr.send();

    xhr.onload = function () {

        if (xhr.status != 200) {
            alert(xhr.status + ":" + xhr.responseText);

        } else {

            const data = JSON.parse(xhr.responseText);

            if (data.status === 'success') {

                data.regiones.forEach(function (region) {

                    regionCarga += '<option value=' + region.id_region + '>' + region.nombre_region + '</option>';
                });

                selectRegiones.innerHTML = regionCarga;
                llamarProvincias();

            } else {

                alert(data.message);
            }

        }
    };

    xhr.onerror = function () {

        alert("No fue posible realizar la carga de regiones.");
    }

}



function llamarProvincias() {


    const selectprovincias = document.getElementById("provincia");
    const region = parseInt(document.getElementById("region").value, 10);
    let provinciaCarga = '<option value="0" selected>Seleccione</option>';

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "../php/listar.php?cmd=listarProvincias&region=" + region);

    xhr.send();

    xhr.onload = function () {

        if (xhr.status != 200) {
            alert(xhr.status + ":" + xhr.responseText);

        } else {
            const data = JSON.parse(xhr.responseText);

            if (data.status === 'success') {
                console.log(data);
                data.provincias.forEach(function (provincia) {

                    provinciaCarga += '<option value=' + provincia.id_provincia + '>' + provincia.nombre_provincia + '</option>';
                });

                selectprovincias.innerHTML = provinciaCarga;
                llamarComunas();
            } else {

                alert(data.message);
            }

        }
    };

    xhr.onerror = function () {

        alert("No fue posible realizar la carga de provincias.");
    }

}



function llamarComunas() {


    const selectcomuna = document.getElementById("comuna");
    const provincia = parseInt(document.getElementById("provincia").value, 10);
    let comunacarga = '<option value="0" selected>Seleccione</option>';

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "../php/listar.php?cmd=listarComunas&provincia=" + provincia);

    xhr.send();

    xhr.onload = function () {

        if (xhr.status != 200) {    
            alert(xhr.status + ":" + xhr.responseText);

        } else {
            const data = JSON.parse(xhr.responseText);

            if (data.status === 'success') {
                console.log(data);
                data.comunas.forEach(function (comuna) {

                    comunacarga += '<option value=' + comuna.id_comuna + '>' + comuna.nombre_comuna + '</option>';
                });

                selectcomuna.innerHTML = comunacarga;

            } else {

                alert(data.message);
            }

        }
    };

    xhr.onerror = function () {

        alert("No fue posible realizar la carga de provincias.");
    }

}
