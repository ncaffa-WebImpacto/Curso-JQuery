<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");


$id = $_POST['txtid'];
$nombre = $_POST['txtnombre'];
$estado = $_POST['cmbestado'];


// $nombre = mysql_real_escape_string($nombre);


$sql = "UPDATE alumnos set nombre = '$nombre', estado = '$estado' where id=$id";


$hecho = Database::ejecutar_idu( $sql );

if( $hecho ){

    $respuesta = json_encode( 

                array('err' => false, 
                      'mensaje'=>"Actualizado correctamente"
                      )
            );

}else{

    $respuesta = json_encode( 

                array('err' => true, 
                      'mensaje'=> $hecho
                      )
            );

}



echo $respuesta;



?>
