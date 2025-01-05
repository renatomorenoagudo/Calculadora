
const calcular = document.getElementById ('calcular');

function imc (){
    const nome = document.getElementById ('nome').value;
    const altura = document.getElementById ('altura').value;
    const peso = document.getElementById ('peso').value;
    const resultado = document.getElementById ('resultado');

    //validação de campo preenchido:
    if (nome.value !== '' && altura.value !=='' && peso !==''){
        const valorImc =(peso/(altura * altura)).toFixed(2);
        resultado.textContent = valorImc;

    } else {
        resultado.textContent = 'preencha todos campos!'
    }


}

calcular.addEventListener('click', imc);

