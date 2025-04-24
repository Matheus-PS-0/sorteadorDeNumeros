function sortear(){
    let quantidadeDeJogos = document.getElementById("quantidade").value;
    let numMinimo = parseInt(document.getElementById("de").value);
    let numMaximo = parseInt(document.getElementById("ate").value);
    let numerosSorteados = [];
    let resultado;
    if (quantidadeDeJogos == "") {
        alert ('Escolha uma quantidade de Jogos')
        return
    }
    if (isNaN(numMinimo) || numMinimo <= 0) {
        alert ('Campo do Numero vazio')
        return
    }
    if (isNaN(numMaximo) || numMaximo <= 0) {
        alert ('Campo ate o numero vazio')
        return
    }
    if (numMinimo > numMaximo){
        alert('o valor escolhido "Do numero" nao pode ser maior que a valor do "ate o numero"')
        return        
    }
    if (quantidadeDeJogos > (numMaximo - numMinimo + 1)) {
        alert('o valor da quantidade de jogos nao pode ser superior a quantidade de possibilidades entre')
        return                
    } 

    for (let index = 0; index < quantidadeDeJogos; index++) {
        resultado = sortearNumeros(numMinimo, numMaximo)
        
        while (numerosSorteados.includes(resultado)) {
        resultado = sortearNumeros(numMinimo, numMaximo)
        
    
        }
        numerosSorteados.push(resultado)

    }
    let informarNumeros = document.getElementById("resultado") 
    quantidadeDeJogos > 1 ? informarNumeros.innerHTML = '<label class="texto__paragrafo">Números sorteados:'  + numerosSorteados +' </label>' : informarNumeros.innerHTML = '<label class="texto__paragrafo">Número sorteado:'  + numerosSorteados +' </label>'
    habilitarReiniciar()
}
function sortearNumeros(minimo, maximo){
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

}
function habilitarReiniciar() {
    let botao = document.getElementById("btn-reiniciar");
    botao.classList.remove("container__botao-desabilitado")
    botao.classList.add("container__botao")        
    
} 
        
function desabilitarReiniciar() {
    let botao = document.getElementById("btn-reiniciar");
    botao.classList.remove("container__botao")
    botao.classList.add("container__botao-desabilitado")
}    
    

function reiniciar() {
    document.getElementById("quantidade").value = ""
    document.getElementById("de").value = ""
    document.getElementById("ate").value = ""
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    desabilitarReiniciar()

    
}
