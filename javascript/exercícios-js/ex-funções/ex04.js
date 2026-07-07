//Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
//e o resto da divisão destes dois valores.

const divisao = (dividendo, divisor) => {
    let resultado;
    let resto;

    if (divisor == 0) {
        console.log('Não existe divisão por 0!');
    } else {
        resultado = Math.trunc(dividendo / divisor);
        resto = dividendo % divisor;
        console.log(`${dividendo} / ${divisor} = ${resultado}. Resto = ${resto}`);
    }
}

divisao(12, 4);
divisao(13, 4);