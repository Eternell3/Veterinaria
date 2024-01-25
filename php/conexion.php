<?php

$conn = pg_connect("host=localhost dbname=veterinaria user=postgres password=S4r4t0g4123");

if (!$conn) {

    echo "error de conexion a la base de datos";

}

?>