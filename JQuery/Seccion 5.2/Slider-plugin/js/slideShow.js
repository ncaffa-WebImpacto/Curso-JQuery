(function(){

	var actual = 0;
	var ancho  = 600;

	var $slideshow = $(".slideShow ul");
	var slides  = $slideshow.find("li").length;
	var $puntos=$(".slidesShowButtons");

	$puntos.find("div").eq(0).css({
		backgroundColor:"#58167d"
	});

	var intervalo = setInterval(function(){
		mover("sig");
	}, 1500 );


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
		tl.to( $slideshow, 1.2, { marginLeft: margen, ease: Elastic.easeOut.config(1, 0.75) } )
			.to($puntoActual, 0.5,{backgroundColor:"#58167d"},"-=1.2")
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


})();