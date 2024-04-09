
//rut = "19153970-2";

function validarFormatoRut(rut) {

    const formatoRut = /^\d{1,2}\.\d{3}\.\d{3}-[\dK-k]$/;

    if (formatoRut.test(rut) == true) {

        return true;
    } else {

        return false;
    }

}


function validarRut(rut) {

    //REEMPLAZAR  PUNTOS Y GUIONES POR VACIO
    const rutPelado = rut.replace(/[.-]/g, '')

    //SE SEPARA EL CUERPO DEL RUT Y EL DV 
    const cuerpoRut = rutPelado.slice(0, -1);
    const dv = rutPelado.slice(-1).toUpperCase();

    //SE INICIALIZAN VARIABLES A UTILIZAR 
    var multiplo = 2;
    var suma = 0;
    var dv_verificado = "";
    var modulo = 11;
    var resto = 0;
    var dv_comparar = "";


    //RECORRE EL RUT DE DERECHA A IZQUIERDA SIN DIGITO VERIFICADOR Y 
    // ES MULTIPLICADO POR EL 2 AL 7 Y AL LLEGAR AL 7 EMPIEZA NUEVAMENTE CON EL 2
    for (var i = cuerpoRut.length - 1; i >= 0; i--) {

        suma += cuerpoRut.charAt(i) * multiplo;
        multiplo += 1;

        if (multiplo > 7) {
            multiplo = 2;
        }
    }
  
    // SE OBTIENE EL RESTO DE LA OPERACION ENTRE EL MODULO 11 Y LA SUMA DE LOS NUMEROS DEL RUT
    resto = suma % modulo;
    dv_verificado = modulo - resto;


    // SI EL DV A VERIFICAR ES 11 SE REEMPLAZA CON K Y SI ES 11 SE REEMPLAZA CON CERO
    // LUEGO SE EVALUAN LAS POSIBILIDADES DE IGUALDAD CON EL DV ORIGINAL DE LA CADENA OBTENIDA
    // EN EL FORMULARIO

    if (dv_verificado == 10) {

        dv_comparar = "K"
       
        if (dv_comparar == dv) {
            return true;

        } else {
            return false;
        }

    } else if (dv_verificado == 11) {
        dv_comparar = "0"

        if (dv_comparar == dv) {
            return true;

        } else {
            return false;
        }

    } else if (dv_verificado != 11 && dv_verificado != 10) {
        dv_comparar = dv_verificado
       
        if (dv_comparar == dv) {
            return true;

        } else {
            return false;
        }

    }


}