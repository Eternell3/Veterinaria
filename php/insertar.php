<?php

/*

EN ESTE ARCHIVO SE ENCUENTRA LA FUNCION QUE PERMITE INSERTAR Y ACTUALIZAR DATOS EN LA BDD DE POSTGRESS A TRAVES DE FUNCIONES SQL

 */

include_once "conexion.php";

$cmd = $_REQUEST["cmd"];

switch ($cmd) {

    case "propietario":

        $idPropietario = $_REQUEST["idPropietario"];
        $rutPropietario = $_REQUEST["rutPropietario"];
        $nombrePropietario = $_REQUEST["nombrePropietario"];
        $apellidoPropietario = $_REQUEST["apellidoPropietario"];
        $fechaNacimientoPropietario = $_REQUEST["fechaNacimientoPropietario"];
        $direccionPropietario = $_REQUEST["direccionPropietario"];
        $telefono = $_REQUEST["telefono"];
        $idRegion = $_REQUEST["idRegion"];
        $idProvincia = $_REQUEST["idProvincia"];
        $idComuna = $_REQUEST["idComuna"];
        $password = $_REQUEST["password"];
        $email = $_REQUEST["email"];

        $sql = "SELECT FN_INSCRIBIR_PROPIETARIO($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) AS resultados";

        $result = pg_query_params($conn, $sql, array(
            $idPropietario
            , $rutPropietario
            , $nombrePropietario
            , $apellidoPropietario
            , $fechaNacimientoPropietario
            , $direccionPropietario
            , $telefono
            , $idRegion
            , $idProvincia
            , $idComuna
            , $password
            , $email));

        $last_error = pg_last_error($conn);

        if ($result) {
            // La consulta fue exitosa
            $row = pg_fetch_assoc($result);
            $respuesta = $row['resultados'];
            $response['status'] = 'success';
            $response['resultados'] = $respuesta;

        } else {
            // Manejar error de la consulta
            $response['status'] = 'error';
            $response['message'] = "Error de LastError: $last_error";
        }

        echo json_encode($response);
        break;

    case 'validarUsuario':

        $email = $_REQUEST["email"];
        $password = $_REQUEST["password"];

        $sql = "SELECT FN_VALIDAR_USUARIO($1, $2) AS resultados";

        $result = pg_query_params($conn, $sql, array(
            $email
            , $password,
        ));

        $last_error = pg_last_error($conn);

        if ($result) {
            // La consulta fue exitosa
            $row = pg_fetch_assoc($result);
            $respuesta = $row['resultados'];
            $response['status'] = 'success';
            $response['resultados'] = $respuesta;

        } else {
            // Manejar error de la consulta
            $response['status'] = 'error';
            $response['message'] = "Error de LastError: $last_error";
        }

        echo json_encode($response);
        break;

    default:

        echo "parametro incorrecto";

}
