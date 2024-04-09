<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrarse</title>
    <link rel="icon" href="../image/icon-title.png" type="image/x-icon">

    <link rel="stylesheet" href="../css/flexboxgrid.css">
    <link rel="stylesheet" href="../css/registro.css">
</head>

<body>
<input type="hidden" value="0" id="codigopropietario">
    <div class="container-fluid">
        <div class="row start-xs start-sm middle-md middle-lg" id="formulario">


            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="row center-xs center-sm center-md center-lg">
                    <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                        <!--- Esta columna es para dar un espacio al principio-->
                    </div>
                    <div class="col-xs-11 col-sm-11 col-md-11 col-lg-11">
                        <h1>Registrarse</h1>
                    </div>
                </div>


            </div>


            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">

                <div class="row start-xs start-sm start-md start-lg" id="col">
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <!--- Esta columna es para dar un espacio al principio-->
                    </div>
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <input type="text" id="rut" placeholder="Rut: 1.111.111-1">
                    </div>

                </div>


                <div class="row start-xs start-sm start-md start-lg" id="col">
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <!--- Esta columna es para dar un espacio al principio-->
                    </div>
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <input type="text" id="nombre" placeholder="Nombre">
                    </div>

                </div>

                <div class="row start-xs start-sm start-md start-lg" id="col">
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <!--- Esta columna es para dar un espacio al principio-->
                    </div>
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <input type="text" id="apellido" placeholder="Apellido">
                    </div>

                </div>

                <div class="row start-xs start-sm start-md start-lg" id="col">
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <!--- Esta columna es para dar un espacio al principio-->
                    </div>
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <label for="fecha">Fecha de nacimiento</label></br>
                        <input name="fecha" type="date" id="fecha">
                    </div>

                </div>

                <div class="row start-xs start-sm start-md start-lg" id="col">
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <!--- Esta columna es para dar un espacio al principio-->
                    </div>

                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">

                        <input type="text" id="direccion" placeholder="Dirección">

                    </div>

                </div>

                <div class="row start-xs start-sm start-md start-lg" id="col">
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <!--- Esta columna es para dar un espacio al principio-->
                    </div>

                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">

                        <input type="text" id="telefono" placeholder="Teléfono">

                    </div>

                </div>

            </div>



            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">

                <div class="row start-xs start-sm start-md start-lg" id="col">
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <!--- Esta columna es para dar un espacio al principio-->
                    </div>
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <label for="region">Región</label><br>
                        <select name="region" id="region" onchange="llamarProvincias()"><!--AQUI SE AGREGAN OPCIONES PARA REGION--></select>
                    </div>

                </div>
                <div class="row start-xs start-sm start-md start-lg" id="col">
                  
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <!--- Esta columna es para dar un espacio al principio-->
                    </div>
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <label for="provincia">Provincia</label><br>
                        <select name="provincia" id="provincia" onchange="llamarComunas()">
                           
                        </select>
                    </div>

                </div>


                <div class="row start-xs start-sm start-md start-lg" id="col">
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <!--- Esta columna es para dar un espacio al principio-->
                    </div>
                   
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <label for="comuna">Comuna</label><br>
                        <select name="comuna" id="comuna">
                            <option value="" selected>Seleccione</option>
                        </select>
                    </div>

                </div>


                <div class="row start-xs start-sm start-md start-lg" id="col">
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <!--- Esta columna es para dar un espacio al principio-->
                    </div>
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <input type="password" id="password" placeholder="Contraseña">
                    </div>

                </div>

                <div class="row start-xs start-sm start-md start-lg" id="col">
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <!--- Esta columna es para dar un espacio al principio-->
                    </div>
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">

                        <input type="text" id="email" placeholder="Email">

                    </div>

                </div>


                <div class="row start-xs start-sm start-md start-lg" id="col">
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <!--- Esta columna es para dar un espacio al principio-->
                    </div>
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">

                        <button onclick="inscribirPropietario()">Registrarse</button>

                    </div>

                </div>

            </div>

            <div class="row center-xs center-sm center-md center-lg" id="login">
                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <!--- Esta columna es para dar un espacio al principio-->
                </div>
                <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                    <i class="fas fa-arrow-right"><a href="login.php">Ya tienes cuenta, inicia sesión aquí</a></i>
                </div>
            </div>

        </div>
            <script src="../js/POST.js"></script>
            <script src="../js/GET.js"></script>
            <script src="../js/validaciones.js"></script>
            <script src="../js/validarFormatos.js"></script>
            <script src="https://kit.fontawesome.com/6d4ecc76b9.js" crossorigin="anonymous"></script>
</body>

</html>