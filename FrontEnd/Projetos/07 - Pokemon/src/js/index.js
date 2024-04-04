const botaoAlterarTema = document.getElementById("alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".botao-troca1");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/sun.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/moon.png");
  }
});


// const botaoAlterarTema = document.getElementById("alterar-tema");
// const body = document.querySelector("body");
// const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

// botaoAlterarTema.addEventListener("click", () => {
//   const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

//   body.classList.toggle("modo-escuro");

//   if (modoEscuroEstaAtivo) {
//     imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
//   } else {
//     imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
//   }
// });