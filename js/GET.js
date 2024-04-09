

// LLAMAR REGIONES
llamarRegiones();


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


