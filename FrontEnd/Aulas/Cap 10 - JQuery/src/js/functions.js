// $(function(){
// 	alert("Olá mundo");
// })

// $(document).ready(function(){
// 	alert("Olá mundo!: ready_function");
// })

// $(function(){
// 	alert("Olá mundo! :Function");
// })

// espera todo o documento carregar(fotos,videos)
$(window).on('load',function(){
	alert("Olá mundo");
})

// $(function(){

// 	$('.artigo1 > p').css('color','rgba(0, 0, 255, 0.6)');
// 	console.log($('.artigo1 > p').css('color'));

// });

// === treinando eventos ===

// $(function () {
// 	$(".artigo1").click(function () {
// 		$(".artigo2").css("background-color", "red");
// 	});
// 	$(".artigo1").hover(
// 		function () {
// 			$(".artigo2").css("background-color", "blue");
// 		},
// 		function () {
// 			$(".artigo2").css("background-color", "rgb(100,100,100)");
// 		}
// 	);

// 	$("textarea")
// 		.focus(function () {
// 			//Executa alguma função quando existe foco no elemento.
// 			console.log("Foco!");
// 		})
// 		.blur(function () {
// 			//Executa uma função quando retiramos o foco.
// 			console.log("Retiramos o foco!");
// 		});

// 	$("select").change(function () {
// 		console.log("Meu select foi alterado!");
// 	});
// });

// $(function(){

	
// 	var timer;
// 	$(window).scroll(function(){
// 		//Evento de quando o scroll ocorre.
// 	})

// 	$(window).resize(function(){
// 		//Evento de quando redimensionamos a tela.
// 		//console.log("Minha tela está sendo redimensionada!");
// 		clearTimeout(timer);
// 		timer = setTimeout(function(){
// 			location.href = "http://localhost/Curso%20WebMaster/JQuery/";
// 		},1000);

// 	})
	
// 	$('a').click(function(e){
// 		//e.preventDefault();
// 	})

	

// 	$('body').click(function(){
// 		$('.box').css('opacity','0.1');
// 	})

// 	$('.box').click(function(e){
// 		e.stopPropagation();
// 	})

// });
