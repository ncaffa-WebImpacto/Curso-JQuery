(function(){


    $(document).ready(function(){


        $.ajax({
			type: 'POST',
			url : 'php/servicios/get.alumnos.php',
			dataType: 'json'
		})
		.done(function( data ){
			
			console.log("Correcto!");
	
            console.log( data ); // Se imprime en consola la api
            
            if(data.error){
                alert("algo raro paso");
                return;
            };

            data.alumnos.forEach(function(alumno,index) {
                
                var content = "";

                 content += '<tr>';
                 content += '<td>'+ alumno.id +'</td>';
                 content += '<td>'+ alumno.nombre +'</td>';
                 content += '<td class="text-center">';
                 content += '<a href="actualizar.html?id='+ alumno.id +'" class="btn btn-primary">Actualizar</a>';                  
                 content += '</td>';
                 content += '<td class="text-center">';
                 content += '<a href="" data-nombre="'+ alumno.nombre+'" data-id="'+ alumno.id +'" class="btn btn-danger">Eliminar</a>'; 
                 content += '</td>';
                 content += '</tr>';

                 $("#tbl").append(content);

            });
	
	
		})
		.fail(function(){
			console.log("Fallo!");
		});

    });

    $("body").on("click",".botEliminar",function(e){

        e.preventDefault();

        var nombre = $(this).data("nombre");
        var id = $(this).data('id');
        

        swal({
            title: "Estas seguro?",
            text: "De querer borrar a: " + nombre,
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "si, borralo!",
            cancelButtonText: "No, cancela porfavor",
            closeOnConfirm: false,
            closeOnCancel: false
          },
          function(isConfirm) {
            if (isConfirm) {

                borrarRegistro(id);

              swal("Borrado!", "Ha sido borrado.", "succes");
            } else {
              swal("Cancelado", "tu archivo esta salvo :)", "error");
            }
          });

        });



    function borrarRegistro( id ){

        // var id = $(this).data('id');
        // console.log(id);

        $.ajax({
			type: 'POST',
			url : 'php/servicios/post.eliminaralumno.php=' + id,
			dataType: 'json'
		})
		.done(function( data ){
			
			console.log("Correcto!");
	
            console.log( data ); // Se imprime en consola la api
            swal("Borrado!", "Ha sido borrado.", "succes");
        });



    }
        



})();