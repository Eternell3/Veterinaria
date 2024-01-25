<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="icon" href="../image/icon-title.png" type="image/x-icon">
    <link rel="stylesheet" href="../css/login.css">
    <link rel="stylesheet" href="../css/flexboxgrid.css">
</head>

<body>


    <div class="container-fluid">

        <div class="login">

            <div class="row start-xs start-sm start-md start-lg">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <a href="registro.php"><i class="fas fa-arrow-left"></i></a>
                </div>
            </div>

            <div class="row center-xs center-sm center-md center-lg">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h1>Login</h1>
                </div>
            </div>

            <div class="row center-xs center-sm center-md center-lg">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <input type="text" name="usuario" placeholder="Usuario" id="usuario">
                </div>
            </div>

            <div class="row center-xs center-sm center-md center-lg">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <input type="password" name="password" placeholder="Contraseña" id="password">
                </div>
            </div>

            <div class="row center-xs center-sm center-md center-lg">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <button onclick="validarUsuario()">Ingresar</button>
                </div>
            </div>

        </div>

    </div>


    <script src="../js/ajax.js"></script>
    <script src="https://kit.fontawesome.com/6d4ecc76b9.js" crossorigin="anonymous"></script>

</body>

</html>