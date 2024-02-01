<?php
include_once "conexion.php";

$cmd = $_REQUEST["cmd"];

switch ($cmd) {

    case 'listarRegiones':

        $sql = "SELECT * FROM VW_LISTAR_REGIONES";
        $result = pg_query($conn, $sql);

        if (!$result) {
            echo json_encode(array("status" => "error", "message" => pg_last_error($result)));
        } else {
            $regiones = array();

            while ($row = pg_fetch_assoc($result)) {
                $regiones[] = $row;
            }

            echo json_encode(array("status" => "success", "regiones" => $regiones));
        }

        break;

    case 'listarProvincias':

        $region = $_REQUEST["region"];

        $sql = "SELECT * FROM VW_LISTAR_PROVINCIAS WHERE id_region = $1 ";
        $result = pg_query_params($conn, $sql, array($region));

        if (!$result) {
            echo json_encode(array("status" => "error", "message" => pg_last_error($result)));
        } else {
            $provincias = array();

            while ($row = pg_fetch_assoc($result)) {
                $provincias[] = $row;
            }

            echo json_encode(array("status" => "success", "provincias" => $provincias));
        }

        break;

    case 'listarComunas':

        $provincia = $_REQUEST["provincia"];

        $sql = "SELECT * FROM VW_LISTAR_COMUNAS WHERE id_provincia = $1";
        $result = pg_query_params($conn, $sql, array($provincia));

        if (!$result) {
            echo json_encode(array("status" => "error", "message" => pg_last_error($result)));
        } else {
            $comunas = array();

            while ($row = pg_fetch_assoc($result)) {
                $comunas[] = $row;
            }

            echo json_encode(array("status" => "success", "comunas" => $comunas));
        }

        break;

    default:

        echo "CMD incorrecto para seleccionar datos";

}
