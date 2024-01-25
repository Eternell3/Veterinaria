<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<h1>Login</h1>

<a href="../web/index.html">Inicio</a>

<label for="usuario">Usuario</label>
<input type="text" name="usuario" placeholder="ingrese usuario" id="usuario">
    

<label for="password">Contraseña</label>
<input type="password" name="password" placeholder="ingrese contraseña" id="password">


<a href="registro.php">Registrarse</a>

<button onclick="validarUsuario()">Ingresar</button>

<script src="../js/ajax.js"></script>
</body>
</html>