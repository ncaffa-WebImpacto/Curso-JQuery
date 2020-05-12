<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

$nombre = $_POST['txtNombre'];
$estado = $_POST['cmbestado'];


$sql= "INSERT INTO alumnos (nombre) values ('$nombre')";

$hecho = Database::ejecutar_idu($sql);

	if($hecho){
		$respuesta = json_encode( 

			array('err' => false, 
				  'mensaje' => "Creado"
				   )
		);
	}else{

		$respuesta = json_encode( 

			array('err' => true, 
				  'mensaje' => $hecho
				   )
		);

	}



echo $respuesta;



?>