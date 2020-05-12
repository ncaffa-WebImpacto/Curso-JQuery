<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");


$alumnosArr = [
	array( 'id'=>1, 'nombre'=>'Juan','promedio'=>85),
	array( 'id'=>2, 'nombre'=>'Pedro','promedio'=>90),
	array( 'id'=>3, 'nombre'=>'Monica','promedio'=>95)
];



$respuesta = json_encode( 

			array('err' => false, 
				  'alumnos' => $alumnosArr )
		);


echo $respuesta;



?>