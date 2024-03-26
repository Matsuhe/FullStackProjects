// Espera que o DOM esteja pronto antes de executar o código.
$(function(){
    // Quando um link dentro de um elemento com a classe 'nav' é clicado.
    $('.nav a').click(function(){
        // Obtém o valor do atributo 'href' do link clicado.
        var href = $(this).attr('href');
        // Obtém a posição superior do elemento correspondente ao 'href'.
        var offSetTop = $(href).offset().top;

        // Anima o rolar da página para a posição superior do elemento correspondente.
        $('html,body').animate({'scrollTop':offSetTop});

        // Impede o comportamento padrão de clicar em um link, que seria a navegação para outra página.
        // return false;
    })
})
