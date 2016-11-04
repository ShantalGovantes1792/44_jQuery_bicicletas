var regexName = /^[A-Z][a-z]*$/;
var regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


$(document).ready(function () {//cuando el document este cargado ejecutara la funcion
	console.log("Esta listo");//para comprobar imprimira este console

// VALIDAR NOMBRE

	$("#name").keydown(function(evt){
		console.log("Presiono una tecla");

		var texto = $("#name").val();
		//Elimina el spam después de hacer la función
		$("span").remove();


		//Se usa trim para quitar los espacios en blanco
		if (texto.trim() == "") {
			console.log("Campo vacio");
			var span = $('<span class="error"> Campo Vacio </span>');
			$(".name-container").append(span);//crea un span con la clase errorcon ese texto y lo incrusta dentro del elemento con la clase name-container
		} else if(!regexName.test(texto)) {//testea la expresion regular de campo vacio
			console.log("Valor invalido");
			var span = $('<span class="error"> Texto invalido </span>');//testea la expresion regular de primer letra mayus
			$(".name-container").append(span);//lo incrusta en el elemente con clase name-container
		}else{
			console.log("Valor invalido");
			var span = $('<span class="error"> validada </span>');
			$(".name-container").append(span);
		}

	});

// VALIDAR APELLIDO

	$("#lastname").keydown(function(){
		console.log("Presiono una tecla");
		var texto = $("#lastname").val();
		
		$("span").remove();

		if (texto.trim() == "") {
			console.log("Campo vacio");
			var span = $('<span class="error"> Campo Vacio </span>');
			$(".lastname-container").append(span);
		} else if(!regexName.test(texto)) {
			console.log("Valor invalido");
			var span = $('<span class="error"> Texto invalido </span>');
			$(".lastname-container").append(span);
		}else{
			console.log("Valor correcto");
			var span = $('<span class="error"> validada </span>');
			$(".lastname-container").append(span);	
		}
	});

// VALIDAR CORREO

	$("#input-email").keypress(function(){
		console.log("Presiono una tecla");

		var texto = $("#input-email").val();
		
		$("span").remove();

		if (texto.trim() == "") {
			console.log("Campo vacio");
			var span = $('<span class="error"> Campo Vacio </span>');
			$(".email-container").append(span);
		} else if(!regexEmail.test(texto)) {
			console.log("Valor invalido");
			var span = $('<span class="error"> Texto invalido </span>');
			$(".email-container").append(span);
		}else{
			console.log("Valor correcto");
			var span = $('<span class="error"> validada </span>');
			$(".email-container").append(span);	
		}
	});

// VALIDAR PASSWORD

	$("#input-password").keypress(function(){
		console.log("Presiono una tecla");
		var texto = $("#inputPassword").val();
		
		$("span").remove();

		if (inputPassword == null || inputPassword =="" ){
			var span = $('<span class="error"> tienes que ingresar una contraseña </span>');
			$(".form-group, .input-box")[3].append(span);
		}else if( inputPassword == "password" ||  inputPassword == "123456" || inputPassword == "098754"){
			
		}

	});

});
