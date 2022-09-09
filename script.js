function fatorial(){

let num = parseInt(document.getElementById('numero').value);
let resposta = document.getElementById('resposta');

let cont = 1;

for (let i = 1; i <= num; i++){
    cont = cont * i;
}

resposta.innerHTML = '<div>Resposta:</div>' + cont;
}

function chamar(){
    limpar();
    gerarNumero();

}

function limpar(){
    let respNumeros = document.getElementById('respNumeros');

    respNumeros.innerHTML='';
}

function gerarNumero(){
    
    var teto = parseInt(document.getElementById('quantidade').value);
    let respNumeros = document.getElementById('respNumeros');
    let frase = document.getElementById('frase');

    valores = [teto];

    for (let index = 0; index < teto; index++) {
        valores[index] = Math.round(Math.random() * 59) + 1; 
    }

    frase.innerHTML = 'Aposte os números a seguir:';

    for(let index = 0; index < teto; index++){
        respNumeros.innerHTML += valores[index] 
        if(index < teto-1)
        respNumeros.innerHTML += " - ";
    }
}

function videoCalvo(){
    document.getElementById('video').style.display = 'block';
}
function botaoNao(){
    document.getElementById('botao').style.display= 'none';
    document.getElementById('botaoNao').style.display= 'none';
    document.getElementById('botaoSIM').style.display= 'block';
}

 


