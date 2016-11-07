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
			var span = $('<span> Campo Vacio </span>');
			$(".name-container").append(span);//crea un span con la clase errorcon ese texto y lo incrusta dentro del elemento con la clase name-container
		} else if(!regexName.test(texto)) {//testea la expresion regular de campo vacio
			console.log("Valor invalido");
			var span = $('<span> Texto invalido </span>');//testea la expresion regular de primer letra mayus
			$(".name-container").append(span);//lo incrusta en el elemente con clase name-container
		}else{
			console.log("Valor invalido");
			var span = $('<span> validada </span>');
			$(".name-container").append(span);
		}

	});

// VALIDAR APELLIDO

	$("#lastname").keydown(function(){
		console.log("Presiono una tecla");
		var apellido = $("#lastname").val();
		
		$("span").remove();

		if (apellido.trim() == "") {
			console.log("Campo vacio");
			var span = $('<span> Campo Vacio </span>');
			$(".lastname-container").append(span);
		} else if(!regexName.test(apellido)) {
			console.log("Valor invalido");
			var span = $('<span> Texto invalido </span>');
			$(".lastname-container").append(span);
		}else{
			console.log("Valor correcto");
			var span = $('<span> validada </span>');
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
			var span = $('<span> Campo Vacio </span>');
			$(".email-container").append(span);
		} else if(!regexEmail.test(texto)) {
			console.log("Valor invalido");
			var span = $('<span> Texto invalido </span>');
			$(".email-container").append(span);
		}else{
			console.log("Valor correcto");
			var span = $('<span> validada </span>');
			$(".email-container").append(span);	
		}
	});

// VALIDAR PASSWORD

	$("#input-password").keypress(function(){
		var contrasena = $("#inputPassword").val();
		console.log(contrasena);
		$("span").remove();
		
		/*if( contrasena == "password" ||  contrasena == "123456" || contrasena == "098754"){
			console.log("Valor correcto");
			var span = $('<span class="error">no puede ser "password", "123456", "098754"</span>');
			$(".Pass").append(span);

		}else if(contrasena == null || contrasena =="" ){
			console.log("Valor correcto");
			var span = $('<span> tienes que ingresar una contraseña </span>');
			$(".Pass").append(span);

		}else*/

		if (contrasena.length < 6 ){
			console.log("Valor correcto");
			var span = $('<span class="error">tienes que ingresar una contraseña con mínimo 6 carácteres</span>');
			$(".Pass").append(span);

		}else{
			console.log("esta bien el password");
		}

	});

});
