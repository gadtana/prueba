// JavaScript Document
function mostrarMensaje() 
{ 
alert ("La Inscripción ha sido correcta"); 
} 

function verificarPassword(){
	pass1=document.getElementById('pass1');
	pass2=document.getElementById('pass2');
	if(pass1.value != pass2.value){
		document.getElementById("error").classList.add("mostrar");
		return false;
	}
	else{
		document.getElementById("error").classList.remove("mostrar");
		document.getElementById("ok").classList.remove("ocultar");
		document.getElementById("enviar").disabled=true;
		return true;
	}
	
}