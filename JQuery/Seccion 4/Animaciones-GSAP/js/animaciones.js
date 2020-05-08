(function(){


	

	function mover(dir){

		var $cajaRoja = $(".cajaRoja");
		$cajaRoja.clearQueue();

		var $cajaAzul = $(".cajaAzul");
		var tl = new TimelineMax();

		switch( dir ){

			case "arr":
				$cajaRoja.animate({
					top: "-=100",
				},450);
				tl.to( $cajaAzul,0.45, {y:"-=100"});
			break;

			case "aba":
				$cajaRoja.animate({
					top: "+=100",
				},450);
				tl.to( $cajaAzul,0.45, {y:"+=100"});
			break;

			case "izq":
				$cajaRoja.animate({
					left: "-=100",

				},450);
				tl.to( $cajaAzul,0.45, {x:"-=100"});
			break;

			case "der":
				$cajaRoja.animate({
					left: "+=100",

				},450);
				tl.to( $cajaAzul,0.45, {x:"+=100"});
			break;


			case "res": 

				$cajaRoja.animate({
					top: "0px",
					left: "0",
					width:"50px",
					height:"50px"

				},450);

				tl.to( $cajaAzul,0.45, {
					x:"0",
					y:"0",
					width:"50px",
					height:"50px",
					backgroundColor: "blue"
				
				});

		}

	}

	// Funcion del keypress en la pagina, para moverlo con las teclas direccionales
	$(document).on("keypress",function(e){


		switch( e.keyCode ){
			case 119:
				mover("arr");
			break;
		
			case 115:
				mover("aba");
			break;

			case 100:
				mover("der");
			break;

			case 97:
				mover("izq");
			break;
		
			default:
				mover("res");
			break;
		}

	});

	$("#botAncho").on("click",function(){

		var $cajaRoja = $(".cajaRoja");
		$cajaRoja.clearQueue();

		var $cajaAzul = $(".cajaAzul");
		var tl = new TimelineMax();

		$cajaRoja.animate({
			width:"+=150",
			height:"+=150"
		},500);

		tl.to( $cajaAzul, 0.5,{
			width:"+=150",
			height:"+=150"

		})
		.to( $cajaAzul,0.3,{backgroundColor:"red"},"-=0.1");

	});

	// Funcion de los botones
	$("button").on('click', function() {
		
		var dir = $(this).data("dir");
		mover( dir );

	});


})();