(function(){



    $.ajax({
        type: 'GET',
        url: 'http://www.json-generator.com/api/json/get/cvoypqrqiG?indent=2',
        dataType: "json",
       
    })
    .done(function(data){
        console.log("Correcto");

        var persona = data;

        console.log(data);

        $("#foto").attr("src",data.picture);
        $("#txtNombre").val(data.name);
        $("#txtDireccion").val(data.address);
        $("#txtGenero").val(data.gender);
        $("#txtTelefono").val(data.phone)

    })
    .fail(function(){
        console.log("fallo");
    })
    .always(function(){
        console.log("completo");
    });







})();