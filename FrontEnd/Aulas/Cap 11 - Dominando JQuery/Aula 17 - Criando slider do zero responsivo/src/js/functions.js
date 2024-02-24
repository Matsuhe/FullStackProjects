$(function(){

	// essa funcao sera ativado sempre que a janela é rolada
	$(window).scroll(function(){
		//	Obtém a posição vertical atual da janela em relação ao topo.
		var windowOffY = $(window).scrollTop();
		// Obtém a altura da janela.
		var windowHeight = $(window).height();
		//  Itera sobre cada elemento com a classe sessao.
		console.log('Window Scroll Top:', windowOffY);
        //console.log('Window Height:', windowHeight);
		$('.sessao').each(function(){
			// Obtém a posição vertical do elemento .sessao em relação ao topo.
			var elOffY = $(this).offset().top;
			console.log('Element Offset Top:', elOffY);
			// Se a parte superior do elemento (deslocada por 30 pixels) estiver abaixo da parte inferior da janela E a parte inferior do elemento estiver acima da parte superior da janela, então:
			// 	Remove a borda inferior de todas as âncoras ($('a').css('border-bottom','0')).
			// 	Obtém o atributo target do elemento .sessao.
			// 	Adiciona uma borda inferior ao elemento com a classe correspondente ($('.'+target).css('border-bottom','2px solid #333')).
			// 	A função retorna, indicando que a operação foi concluída para esta sessao.
			if(elOffY+30 < (windowOffY + windowHeight)){
					//console.log('Element in View:', this);
					$('a').css('border-bottom','0');
					var target = $(this).attr('target');
					$('.'+target).css('border-bottom','2px solid #333');
					return;
			}
		});
	})



});