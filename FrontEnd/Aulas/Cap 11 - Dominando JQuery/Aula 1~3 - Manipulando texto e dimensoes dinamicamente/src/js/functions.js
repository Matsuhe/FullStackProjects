
// === Aula 1 === 
// $(function () {
	
// 	var el = $('div.box');
	
// 	el.css('background-color', 'green');
	
// 	function teste() {
// 		el.css('color', 'red');
// 	}
	
// 	teste();
// });


// === Aula 2 ===
// $(function(){

// 	//Pegamos a largua do nosso elemento.
// 	$('.box').width();

// 	//Setamos a largura.
// 	$('.box').css('width','900px');
// 	$('.box').css('height','700px');
// 	// Width/height = Dimensão calculada total com base no padding.
// 	// innerWidth/innerHeight = Dimensão calculada total INCLUINDO o padding.
// 	// outerWidth/outerHeight = Dimensão calculada total INCLUINDO o padding e margin(se o parametro
// 	// for true).

// 	console.log("Width: "+$('.box').width());
// 	console.log("Inner Width: "+$('.box').innerWidth());
// 	console.log("Outer Width: "+$('.box').outerWidth(true));

// 	console.log("Height: "+$('.box').height());
// 	console.log("Inner Height: "+$('.box').innerHeight());
// 	console.log("Outer Height: "+$('.box').outerHeight(true));

// });

// === Aula 3 ===

$(function(){

	/*
	var el = $('.box');

	var meutexto = 'Olá mundo!';
	el.html("<div class=\"teste\">"+meutexto+"</div>");
	el.html(el.html() + '<h1 class="texto1">Meu texto via javascript!</h1>');


	$('.box2').text("<div></div>");
	$('.box2').text($('.box2').text() + "Ola mundo!");

	$('input[type=text]').val("Olá mundo!");

	$('textarea').text("Olá mundo");
	*/

	$('input[type=button]').click(function(){
		var str = $('input[type=text]').val();
		//Split separa nossa string com base no delimitador.
		//var var2 = v.split("@");
		//console.log(var2);

		//substr recorta nossa string
		//console.log(str.substr(1,4));

		/*

		var splitstr = str.split("@");

		if(splitstr[1] == 'hotmail.com'){
			$('input[type=text]').css('opacity','0');
		}else{
			console.log("A condição não bateu!");
		}

		*/

		console.log(str);

	})

});



