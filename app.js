let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;
console.log (numeroSecreto)

function ExibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}
exibirMensagemInicial();

function exibirMensagemInicial(){
    ExibirTextoNaTela('h1','Jogo do número secreto');
    ExibirTextoNaTela('p','Escolha um número entre 1 e 10 para advinhar qual é o número secreto');
    document.getElementById('chute').removeAttribute('disabled')
}



function verificarChute(){
    console.log ('chute');
}

function gerarNumeroSecreto(){
    numeroEscolhido  = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNalista == numeroLimite){
        listaDeNumerosSorteados=[];
    }
    
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroSecreto()
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido
    }
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    

    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu com ${tentativas} ${palavraTentativa}`;
        ExibirTextoNaTela('h1', 'Parabéns, você acertou');
        ExibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
 

    }else{
        ExibirTextoNaTela('h1', 'ERROU')
        if ( chute < numeroSecreto){
            ExibirTextoNaTela('p', 'O numero secreto é maior')
        }else{
            ExibirTextoNaTela('p', 'o numero secreto é menor')
        }
    tentativas++;
    if(tentativas > 4){
        
        ExibirTextoNaTela('h1', 'GAME OVER');
        ExibirTextoNaTela('p', 'Você esgotou o numero de tentativas');
        document.getElementById('reiniciar').removeAttribute('disabled')
        document.getElementById('chute').setAttribute('disabled', true)
        //reinicar()
    }
    limparCampo();
    }


}

function     limparCampo(){
    chute = document.querySelector('input')
    chute.value = '';
}
function reinicar(){
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    
}