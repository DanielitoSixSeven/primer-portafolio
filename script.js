const formulario = document.getElementById("formContacto");
const resultado = document.getElementById("resultado");
const inputNombre = document.getElementById("nombre");

formulario.addEventListener("submit", function(evento){
evento.preventDefault()

resultado.textContent="¡Gracias, "+inputNombre.value;
formulario.reset();
})