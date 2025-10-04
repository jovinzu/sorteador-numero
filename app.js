function sortear(){
let quantidade = parseInt(document.getElementById('quantidade').value);
let de = parseInt(document.getElementById('de').value);
let ate = parseInt(document.getElementById('ate').value);

let sorteados = [];
let numero;
let resultado = document.getElementById('resultado');

if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
        resultado.innerHTML = `<label class="texto__paragrafo">Por favor, preencha com números válidos!</label>`;
        return;
    }

if (de > ate) {
        resultado.innerHTML = `<label class="texto__paragrafo">"De" deve ser menor ou igual a "Até".</label>`;
        return;
    }

if (quantidade > (ate - de + 1)) {
        resultado.innerHTML = `<label class="texto__paragrafo">Quantidade solicitada é maior do que os números disponíveis no intervalo!</label>`;
        return;
    }
    
if (quantidade <= 0 || de < 0 || ate < 0) {
    resultado.innerHTML = `<label class="texto__paragrafo">Insira apenas valores positivos maiores que zero!</label>`;
    return;
}

for (let i = 0; i < quantidade; i++){
    numero = numeroAleatorio(de, ate);

    while (sorteados.includes(numero)) {
        numero = numeroAleatorio(de, ate);
    }
    
    sorteados.push(numero);
}

sorteados.sort ((a, b) => a - b)

resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados.join(' | ')}</label>`;
desabilitarBotaoSortear();
habilitarBotaoReiniciar();
}

function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let botaoReiniciar = document.getElementById('btn-reiniciar');
let botaoSortear = document.getElementById('btn-sortear');

function desabilitarBotaoSortear() {
    document.getElementById('btn-sortear').disabled = true;
    botaoSortear.classList.remove('container__botao');
    botaoSortear.classList.add('container__botao-desabilitado');
}

function habilitarBotaoSortear() {
    document.getElementById('btn-sortear').disabled = false;
    botaoSortear.classList.remove('container__botao-desabilitado');
    botaoSortear.classList.add('container__botao');
}

function desabilitarBotaoReiniciar() {
    document.getElementById('btn-reiniciar').disabled = true;
    botaoReiniciar.classList.remove('container__botao');
    botaoReiniciar.classList.add('container__botao-desabilitado');
}

function habilitarBotaoReiniciar() {
    document.getElementById('btn-reiniciar').disabled = false;
if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
    botaoReiniciar.classList.remove('container__botao-desabilitado');
    botaoReiniciar.classList.add('container__botao');
}
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    desabilitarBotaoReiniciar();
    habilitarBotaoSortear();
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
}