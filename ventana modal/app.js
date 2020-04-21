let elementoAbrir = document.querySelector('#abrir-ventana');
let elementoCerrar = document.querySelector('#cerrar-ventana');
let ventana = document.querySelector('#ventana-contenedor');

elementoAbrir.addEventListener('click', function() {
	ventana.classList.add('mostrar');
});

elementoCerrar.addEventListener('click', function() {
	ventana.classList.remove('mostrar');
});