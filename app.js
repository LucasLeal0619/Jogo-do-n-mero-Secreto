let listadeNumerosSorteados = []; 
let numeroLimite = 1000
let numerosSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//Função sem retorno mas tem parâmetro
function exibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag)
campo.innerHTML = texto;
if ('speechSynthesis' in window) {
    let utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR'; 
    utterance.rate = 1.2; 
    window.speechSynthesis.speak(utterance); 
} else {
    console.log("Web Speech API não suportada neste navegador.");
}
}
function exibirMensagemInicial(){
exibirTextoNaTela('h1','jogo do número secreto' ); 
exibirTextoNaTela('p','Escolha um número entre 1 e 1000');
}

exibirMensagemInicial();

// Função sem parâmetro e sem retorno
function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numerosSecreto){
        exibirTextoNaTela('h1', "Acertou");
        let palavratentaviva = tentativas > 1 ? "tentativas" : "tentativas";
        let mensagemtentivas = `você descobriu o número secreto com ${tentativas} ${palavratentaviva}`
        exibirTextoNaTela('p', mensagemtentivas);
        document.getElementById('reiniciar').removeAttribute("disabled");

    
    }else if(chute > numerosSecreto){
        exibirTextoNaTela('p', 'o número secreto é menor');
    }else{
        exibirTextoNaTela('p', 'o número secreto é maior');
    }
   tentativas++;
} 

//função sem parâmetro mas tem retorno
function gerarNumeroAleatorio() {
    let numerosEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNalista = listadeNumerosSorteados.length;

     if(quantidadeDeElementosNalista == numeroLimite){
        listadeNumerosSorteados = [];
     }
    
    if(listadeNumerosSorteados.includes(numerosEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listadeNumerosSorteados.push(numerosEscolhido);
        console.log(listadeNumerosSorteados);
        return numerosEscolhido;
    }
} 

function limparcampo(){
    chute = document.querySelector('input'); 
    chute.value = '';
} 

function reiniciarjogo(){
    numerosSecreto = gerarNumeroAleatorio(); 
    limparcampo(); 
    tentativas = 1;
    exibirMensagemInicial(); 
    document.getElementById('reiniciar').setAttribute('disabled', true);
}