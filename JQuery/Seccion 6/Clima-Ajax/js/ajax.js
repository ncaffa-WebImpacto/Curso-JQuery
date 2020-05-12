(function(){

	var Latitude = 9.975941;
	var Longitude = -84.007505;


	$.ajax({
		type: 'GET',
		url : 'http://api.openweathermap.org/data/2.5/weather?lat='+ Latitude +'&lon=' + Longitude + "&units=metric&appid=9f50a805aa0089a1edd1829a5db029f0",
		dataType: 'jsonp'
	})
	.done(function( data ){
		
		console.log("Correcto!");

		//console.log( data ); // Se imprime en consola la api

		var tiempo = data;

		console.log(tiempo);


		        var html ="";
				html += '<tr>';
				html += '<td>'+ tiempo.main.temp +'</td>';
				html += '<td>'+ tiempo.main.humidity +'</td>';
				for (var i = 0; i < tiempo.weather.length; i++) {
					html += '<td>'+ tiempo.weather[i].description +' </td>';	
				}
				html += '</tr>';
			
			$(".table").append( html );


	})







})();