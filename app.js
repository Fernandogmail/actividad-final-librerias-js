$(function(){
	
	//funcion ca,bia color titulo a gris, luego llama la funcion que repone color original
	function cambiarColorTitulo(elemento){
		$(elemento).animate({
			color: "#ffff"
		}, 500, function(){
			tituloOriginal($('.main-titulo'))
		})
	};
// funcion restaura el color original del titulo, en el parametro animate llama la funcion cambiarColorTitulo()
	function tituloOriginal(elemento){
		$(elemento).animate({
			color:'#DCFF0E'
		}, 500, function(){
			cambiarColorTitulo($('.main-titulo'))
		})
	};
// funcion genera la interaccion del titulo.
	function interzaccionTitulo(){
		cambiarColorTitulo($('.main-titulo'))
	}
	//invocacion funcion interaccion titulo.
	interzaccionTitulo();

	var images=[
		'1.png',
		'2.png',
		'3.png',
		'4.png',
	]
	var contDiv =[
		'.col-1',
		'.col-2',
		'.col-3',
		'.col-4',
		'.col-5',
		'.col-6',
		'.col-7',
	]
	// funcion generar imagen aleatoria en el tablero inicio.
	function generarImg(){
		for (var i = 0; i < contDiv.length; i++) {
			 for (var j = 0; j < 5; j++) {	 	
		var imagen = images [Math.floor (Math.random () * images.length)]	
	 	$(contDiv[i]).append('<img src="image/'+imagen+'"></img> ')	 	
	 		}	
		 }
	}
	
	
generarImg()

function eliminarImgIguales(){
	var valor = $('img').attr('src');
	alert(valor)
}
eliminarImgIguales()
	
})
