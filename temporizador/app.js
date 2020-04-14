let temporizador = document.querySelector('#temporizador');

function temporizador(duracion, elemento) {
	let tiempo = duracion, minutos, segundos;
	
	setInterval(function() {
		minutos = parseInt(tiempo / 60, 10);
		segundos = parseInt(tiempo % 60, 10);
		
		minutos = minutos < 10 ? '0' + minutos : minutos;
		segundos = segundos < 10 ? '0' + segundos : segundos;
		
		elemento.textContent = `${minutos}:${segundos}`;
		
		if(--tiempo < 0) {
			tiempo = 0;
		}
	}, 1000);
}

temporizador(600, temporizador);