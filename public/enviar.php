<?php

   $destino= "bc0415elsamy@hotmail.com";
   $name = $_POST["name"];
   $email = $_POST["email"];
   $tel = $_POST["tel"];
   $message = $_POST["message"];
   $contenido = "Nombre: " . $name ."\nCorreo: " . $email . "\nTel: " . $tel . "\nMensaje: " . $message;
   mail($destino,"Contacto",$contenido);
   header("Location:gracias.html")

?>