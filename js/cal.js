const nome = document.getElementById('nome');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

function imc () {
    alert('test click');
}

calcular.addEventListener('click',imc);