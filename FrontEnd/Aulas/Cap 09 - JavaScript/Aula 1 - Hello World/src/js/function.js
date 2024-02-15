window.onload = function(){
    // condições
    // === -> Além de ser igual a variável tem que ser do mesmo tipo!
    // == -> Apenas o valor precisa ser igual.
    // != -> Diferente
    // !== -> Diferente valor e tipo.
    var nome2 = 'Zebra';
    if (nome2 == 'Raposa') {
        alert("verdadeira");
    }else{
        alert("falsa");
    }

    // funções

    function realizarConta(){
        console.log('Minha funcao');

    }

    realizarConta();
}