/*Todos los campos son obligatorios, excepto los dos últimos.
Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
Para los campos nombre y apellido la primera letra debe ser mayúscula
Validar que el campo email tenga un formato válido. Ej: name@domain.com
El campo password debe tener al menos 6 caracteres
El campo password no puede ser igual a "password" ó "123456" ó "098754"
El valor seleccionado de bicis, debe ser una de las opciones presentadas
*NOTA: * Recomendamos que el mensaje se añada con un span ya que los estilos 
ya están definidos.

*/

var cajaInput = document.getElementsByClassName("input-box");
var i;
var quitarSpan = document.getElementsByTagName("span");

function validateForm(){
	/* Este ciclo es para quitar los spans cuando vuelves a poner otra vez la 
	respuesta y la ingresar con el botón y nose sobre pongan los spans
	PARA VALIDAR LA FUNCION DEL SPAN Y PARA QUE DESAPARESCAN SE UTILIZA UN WHILE Y DENTRO DE ESTE UN FOR
	CUANDO COMIENZA EL PROGRAMA TENEMOS 0 SPANS, POR LO TANTO NO ENTRA DENTRO DEL CICLO WHILE. CUANDO 
	PASA POR LAS FUNCIONES SI ESTA MAL EL VALOR DEL INPUT APARECEN LOS SPANS. CUANDO VUELVES A DAR CLICK 
	EN EL BOTON REGISTRAR, VUELVE A COMENZAR EL PROGRMAMA. EN ESTE MOMENTO YA HAY SPAN POR LO TANTO EN EL CICLO 
	WHILE LA CONDICION DICE (quitarSpan.length > 1) COMO YA HAY SPAN EN LA VARIABLE quitarSpan "ya que quitarSpan es
	un arreglo" LOS SPANS SON MAYORES A 1 ENTONCES ENTRARÁ EN EL CLICLO FOR QUE TIENE COMO CONDICIÓN 
	(var j = 0 ; j<quitarSpan.length-1 ; j++) QUE NOS DICE QUE EL ARREGLO quitarSpan-1 sera mayor a 0, EN DONDE 0 es igual 
	j entonces se dará la sentencia quitarSpan[j].parentNode.removeChild(quitarSpan[j]);
	*/
	while(quitarSpan.length > 1){
		for(var j = 0 ; j<quitarSpan.length-1 ; j++){
			quitarSpan[j].parentNode.removeChild(quitarSpan[j]);
		}	
	}

	validarNombre();
	validarApellido();
	validarCorreo();
	validarContrasena();
	validarBici();
};

function validarNombre(){
	var name = document.getElementById("name").value;
	var regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
	var espacioBlanco = /^\s+$/;

	// Para validar el nombre haré una condición

	if (!(regexName.test(name) ) || (espacioBlanco.test(name) )){
		// Si no es verdad se mostrará un span con la alerta "El nombre no es correcto"
		var i = 0;
		var texto = document.createTextNode("El Nombre no es valido");
		crearSpan(texto,i);
		return false; 
	} else if ( !(/^[ÑA-Z][ña-z]*$/g.test(name) )) {
		/*Este es el codigo para que el formulario sea validado con
		la primera letra sea mayuscula  --- /^[ÑA-Z][ña-z]*$/g  ----*/
		var i = 0;
		var texto = document.createTextNode("La primera letra es mayuscula");
		crearSpan(texto,i);
		return false;
	}
	console.log("esta bien el nombre");
	return true;
};

function validarApellido(){
	var lastname = document.getElementById("lastname").value;
	var regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
	var espacioBlanco = /^\s+$/;

	// Para validar el nombre haré una condición

	if (!(regexName.test(lastname) ) || (espacioBlanco.test(lastname) )){
		// Si no es verdad se mostrará un span con la alerta "El apellido no es correcto"
		var i = 1;
		var texto = document.createTextNode("El apellido no es valido");
		crearSpan(texto,i);
		return false; 
	} else if ( !(/^[ÑA-Z][ña-z]*$/g.test(lastname) )) {
		/*Este es el codigo para que el formulario sea validado con
		la primera letra sea mayuscula  --- /^[ÑA-Z][ña-z]*$/g  ----*/
		var i = 1;
		var texto = document.createTextNode("La primera letra es mayuscula");
		crearSpan(texto,i);
		return false;
	}
	console.log("esta bien el apellido");
	return true;
};

function validarCorreo(){
	var inputEmail = document.getElementById("input-email").value;
	var regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	var espacioBlanco = /^\s+$/;
	//Este apartado es para validar el correo electronico
	if (!(regexEmail.test(inputEmail))){
		//alert("Campo correo incorrecto");
		i = 2;
		var texto = document.createTextNode("El correo no es valido");
		crearSpan(texto,i);
		return false;
	}
	console.log("esta bien el correo");
	return true;
};

function validarContrasena(){
	var inputPassword = document.getElementById("input-password").value;
	// Este es para validar el password

	var i = 3;
	if( inputPassword == null || inputPassword == "" ){
		var texto = document.createTextNode("tienes que ingresar una contraseña");
		crearSpan(texto,i);
		return false;
	}else if ( inputPassword == "password" ||  inputPassword == "123456" || inputPassword == "098754"){
		var texto = document.createTextNode("Esa contraseña no es valida");
		crearSpan(texto,i);
		return false;
	}else if  ( inputPassword > 6 ){
		var texto = document.createTextNode("La contraseña tiene que tener al menos 6 carácteres y al menos 1 letra");
		crearSpan(texto,i);
		return false;
	};
	console.log("esta bien el password");
	return true;
};

function validarBici (){
	var bici = document.getElementsByTagName("select")[0].selectedIndex;
	var i = 4;

	if ( bici == 0  || bici == null) {
		var texto = document.createTextNode("selecciona un tipo de bici");
		crearSpan(texto,i);
		return false;
	}
	console.log("escogio una");
	return true;
}

function crearSpan (texto,i){
	var span = document.createElement("span");
	span.appendChild(texto);
	cajaInput[i].appendChild(span);
}