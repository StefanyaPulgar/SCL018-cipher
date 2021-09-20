import cipher from './cipher.js';

/*para cifrar*/
document.getElementById("btn-cifrar").addEventListener("click", cifrado);
/*para descifrar*/
const botonDescifrar = document.getElementById("btn-descifrar");
botonDescifrar.addEventListener("click", descifrar);

function cifrado() {
	let desplazamiento = document.getElementById("desplazamiento").value;
	let cifrarTexto = document.getElementById("texto").value;

	if (cifrarTexto == "") {
		alert("Ingrese contraseña a cifrar")
	} else {
		let mostrarTextoCifrado = cipher.encode(cifrarTexto, parseInt(desplazamiento));
		document.getElementById("cifrad").value = mostrarTextoCifrado;
	}
}

function descifrar() {
	let desplazamiento1 = document.getElementById("desplazamiento1").value;
	let descifrarTexto = document.getElementById("texto1").value;

	if (descifrarTexto == "") {
		alert("Ingrese contraseña a descifrar")
	} else {
		let mostrarTextodescifrado = cipher.decode(descifrarTexto, parseInt(desplazamiento1));
		document.getElementById("cifrad1").value = mostrarTextodescifrado;
	}
}

//navegar en paginas
let btncifrar = document.querySelector(".pag1"); //boton cifrar
btncifrar.addEventListener("click", nextpage);

function nextpage() {
	document.querySelector(".pagprincipal").style.display = "none"; //none bloquea la pag
	document.querySelector(".pagcifrar").style.display = "block"; //block la muestra
	document.querySelector(".pagdescifrar").style.display = "none";
}

let btndescifrar = document.querySelector(".pag2");
btndescifrar.addEventListener("click", nextpage1);

function nextpage1() {
	document.querySelector(".pagprincipal").style.display = "none"; //none bloquea la pag
	document.querySelector(".pagcifrar").style.display = "none"; //block la muestra
	document.querySelector(".pagdescifrar").style.display = "block";
}

let btnvolver = document.querySelector(".buttonv .v1"); //btn volver
btnvolver.addEventListener("click", back)

function back() {
	document.querySelector(".pagprincipal").style.display = "block";
	document.querySelector(".pagcifrar").style.display = "none";
	document.querySelector(".pagdescifrar").style.display = "none";
}

let btnvolver1 = document.querySelector(".buttonv .v2"); //btn volver
btnvolver1.addEventListener("click", back1)

function back1() {
	document.querySelector(".pagprincipal").style.display = "block";
	document.querySelector(".pagcifrar").style.display = "none";
	document.querySelector(".pagdescifrar").style.display = "none";
}

let btnborrar = document.getElementById("borra"); //borrar texto de imputs
btnborrar.addEventListener("click", borrar)

function borrar() {
	document.getElementById("texto").value = "";
	document.getElementById("cifrad").value = "";
}

let btnborrar1 = document.getElementById("borra1");
btnborrar1.addEventListener("click", borrar1)

function borrar1() {
	document.getElementById("texto1").value = "";
	document.getElementById("cifrad1").value = "";
}

let copiar = document.getElementById("copy");
copiar.addEventListener("click", copyToClipboard);

function copyToClipboard() {
	let content = document.getElementById("cifrad");
	content.select();
	document.execCommand("copy");

	alert("Copiado");
}

let copiar1 = document.getElementById("copy1");
copiar1.addEventListener("click", copyToClipboard1);

function copyToClipboard1() {
	let content = document.getElementById("cifrad1");
	content.select();
	document.execCommand("copy");

	alert("Copiado");
}
