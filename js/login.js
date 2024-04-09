


// FUNCION QUE PERMITE VALIDAR LAS CREDENCIALES DE USUARIO PARA EL LOGIN

function validarUsuario() {


    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "../php/registrosBDD.php?cmd=validarUsuario&email=" + usuario + "&password=" + password);

    xhr.send();

    xhr.onload = function () {

        if (xhr.status != 200) {
            alert(xhr.status + ":" + xhr.responseText);

        } else {

            const data = JSON.parse(xhr.responseText);

            if (data.status === 'success') {

                alert(data.resultados);
                window.location.href = "registroMascota.php";

            } else {
                alert(data.message);

            }
        }

    };

    xhr.onerror = function () {

        alert("Petición realizada no fue exitosa.");
    }

}