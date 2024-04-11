

// FUNCION QUE PERMITE INSCRIBIR (AGREGAR A LA BASE DE DATOS) A UN NUEVO PROPIETARIO DE MASCOTA 

function inscribirPropietario() {

    if(validarRegistro() == true){


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
        xhr.open("POST", "../php/registrosBDD.php?cmd=propietario&idPropietario=" + idPropietario
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
                    window.location.href = "login.php";

    
                } else {
                    alert(data.message);
    
                }
    
            }
    
        };
    
        xhr.onerror = function () {
    
            alert("Petición realizada no fue exitosa.");
        }

    }

}






