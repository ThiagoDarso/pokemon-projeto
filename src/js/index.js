// Objetivo 1 - quando clicar no botão de troca de tema adicionar a calsse modo-escuro no body para que os estilos para que os estilos no modo escuro sejam aplicados e mudar a imagem para lua

// passo 1 - pegar no js o elemento HTML correspondente ao botão de troca de tema
const botaoalterartema = document.getElementById("botao-alterar-tema");

// passo 2 - dar um jeito de pegar no js o elemento HTML correspondente ao body
const body = document.querySelector("body");

const imagembotaotrocadetema = document.querySelector(".imagem-botao")


// passo 3 - dar um jeito de identificar o clique do usuario no botao de troca de tema
botaoalterartema.addEventListener("click", () => {

    // passo 6 - remover a classe do modo-escuro do body
    const modoescuroestaativo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoescuroestaativo) {
        // passo 7 - remover a classe do modo-escuro do body

        // passo 8 - trocar imagem do botao de alterar tema pra sol
        imagembotaotrocadetema.setAttribute("src", "./src/imagens/sun.png");

        // passo 4 - adicionar a classe modo-escuro no body
    } else {
        // passo 5 - trocar a imagem do botao de alterar tema pra lua 
        imagembotaotrocadetema.setAttribute("src", "./src/imagens/moon.png");
    }
});

