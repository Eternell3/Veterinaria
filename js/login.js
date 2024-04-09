


// FUNCION QUE PERMITE VALIDAR LAS CREDENCIALES DE USUARIO PARA EL LOGIN

function validarUsuario() {


    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    if (usuario.length == 0) {

        alert("Ingrese un correo electrónico");
        return false;

    } else if (validarFormatoEmail(usuario) == false) {

        alert("Ingrese un correo valido");
        document.getElementById("usuario").value = "";
        document.getElementById("password").value = "";
        return false;

    } else if (password.length == 0) {

        alert("Ingrese contraseña");
        return false;

    } else {

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "../php/registrosBDD.php?cmd=validarUsuario&email=" + usuario + "&password=" + password);

        xhr.send();

        xhr.onload = function () {

            if (xhr.status != 200) {
                alert(xhr.status + ":" + xhr.responseText);

            } else {

                const data = JSON.parse(xhr.responseText);

                if (data.status === 'success' && data.resultados === 'Log-in Exitoso') {

                    alert(data.resultados);
                    window.location.href = "registroMascota.php";

                } else {

                    alert(data.resultados);
                    document.getElementById("usuario").value = "";
                    document.getElementById("password").value = "";

                }
            }

        };

        xhr.onerror = function () {
            const data = JSON.parse(xhr.responseText);
            alert(data.message);
        }

    }

}