(function(){


	$.slideShow = function( opciones ){

			opciones = $.extend({
					divDestino: ".slideShow",
					intervalor:1500,
					ancho: 600,
					velocidad: 1200,
					slides: [],
					color: "#ba007c"
			},opciones);


			if(opciones.slides.length == 0){
				alert("los slides son necesarios.");
				return;
			}

			opciones.velocidad= opciones.velocidad/1000;

			var actual = 0;
			var ancho  = opciones.ancho;

			var slides  = opciones.slides.length;

			// creacion del slideshow

				var contenido="";
				contenido += "<ul>"
					for(var i =0;i<opciones.slides.length;i++){

						contenido += '<li><img src="'+opciones.slides[i]+'"></li>';

					}
				contenido += "</ul>";

				$( opciones.divDestino ).append( contenido );

				var $slideshow = $ (opciones.divDestino + " ul");
				

			//creacion de los botones
				contenido = "";

				contenido += '<div class="slidesShowButtons">';
				
				for(var i =0;i<opciones.slides.length;i++){

					contenido += '<div data-idx="'+i+'" class="slideButton"></div>';

				}

				contenido += "</div>";

				$(opciones.divDestino).append(contenido);



			var $puntos=$(".slidesShowButtons");

			$puntos.find("div").eq(0).css({
				backgroundColor: opciones.color
			});

		var intervalo = setInterval(function(){
				mover("sig");
		}, opciones.intervalo );


	function mover( dir){

			( dir === "sig" ) ? actual-- : actual++;

			if( actual > 0 ){

				actual = ( slides - 1 ) * -1;

			}else if( actual <= ( slides * -1 ) ){
				actual = 0;
		}

			mover_por_punto(actual);
		}

	function mover_por_punto(actual,click ){
		
		if( click )
			clearInterval( intervalo );

		var margen = actual * ancho;
		var index = actual *-1;
		var $puntoActual = $puntos.find("div").eq(index);
		var $demasPuntos = $puntos.find("div").not($puntoActual);

		var tl = new TimelineMax();
		tl.to( $slideshow, opciones.velocidad, { marginLeft: margen, ease: Elastic.easeOut.config(1, 0.75) } )
			.to($puntoActual, 0.5,{backgroundColor: opciones.color },"-=1.2")
			.to($demasPuntos,0.5,{backgroundColor:"#a1a1a1"},"-=1.2");

		// $slideshow.animate({
		// 	marginLeft: margen
		// }, 400 );


	}

	$(".slideButton").on("click",function(){

		var idx = $(this).data("idx");
		idx= idx *-1;
		console.log(idx);

		mover_por_punto(idx,true)
	})




	$(".botSlide").on("click",function(){

			var dir = $(this).data("mov");
			mover( dir, true );

		});

	}
	

})();