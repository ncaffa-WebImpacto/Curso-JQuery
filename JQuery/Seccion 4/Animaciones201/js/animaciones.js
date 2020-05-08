(function(){

	var $cajaRoja = $(".cajaRoja");

	$("#botTamano").on("click",function(){

		$cajaRoja.animate({
			width: "+=100px",
			height:"+=100px",
		},function(){
			console.log("Termino la animacion");
			
		}).animate({
			width: "-=100px",
			height:"-=100px",
		}).animate({
			opacity:0.1
		},1500,function(){

			$(this).remove();

		});

	});


})();