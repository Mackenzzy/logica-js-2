let numeroSecreto = gerarNumeroSecreto();
console.log (numeroSecreto)

function ExibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

ExibirTextoNaTela('h1','Jogo do número secreto');
ExibirTextoNaTela('p','Escolha um número entre 1 e 10 e tente advinhar qual é o número secreto');

function verificarChute(){
    console.log ('chute');
}

function gerarNumeroSecreto(){
    return parseInt(Math.random() * 10 + 1);
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        console.log ('parabens')
    }else{
        console.log ('errou otario')
    }
}