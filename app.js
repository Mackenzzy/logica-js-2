let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;
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
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu com ${tentativas} ${palavraTentativa}`;
        ExibirTextoNaTela('h1', 'Parabéns, você acertou')
        ExibirTextoNaTela('p', mensagemTentativas)
    }else{
        ExibirTextoNaTela('h1', 'ERROU')
        if ( chute < numeroSecreto){
            ExibirTextoNaTela('p', 'O numero secreto é maior')
        }else{
            ExibirTextoNaTela('p', 'o numero secreto é menor')
        }
    tentativas++;
    }
}