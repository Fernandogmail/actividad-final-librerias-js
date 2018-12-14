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

$('.btn-reinicio').click(function(){
	var images=[
		'1.png',
		'2.png',
		'3.png',
		'4.png',

	]
	var image = images [Math.floor (Math.random () * images.length)]
	$('div[class *= col]').append('<img src="image/'+image+'"></img> ')
	$('div[class *= col]').append('<img src="image/'+image+'"></img> ')
	$('div[class *= col]').append('<img src="image/'+image+'"></img> ')
	$('div[class *= col]').append('<img src="image/'+image+'"></img> ')
	$('div[class *= col]').append('<img src="image/'+image+'"></img> ')
	
})
	//invocacion funcion interaccion titulo.
	interzaccionTitulo();
	
})