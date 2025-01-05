
const calcular = document.getElementById ('calcular');

function imc (){
    const nome = document.getElementById ('nome');
    const altura = document.getElementById ('altura');
    const peso = document.getElementById ('peso');
    const resultado = document.getElementById ('resultado');

    //validação de campo preenchido:
    if (nome.value !== ''){
        alet ('nome vazio!')
    }


}

calcular.addEventListener('click', imc);

