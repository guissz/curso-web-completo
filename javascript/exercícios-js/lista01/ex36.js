// Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.

const primeiraMultiplicacao = (array, numero) => {
    let resultado = [];

    for(let i = 0; i < array.length; i++) {
        resultado.push(array[i] * numero);
    }

    return resultado;
}

const segundaMultiplicacao = (array, numero) => {
    let resultado = [];

    for(let i = 0; i < array.length; i++) {
        if(array[i] > 5) {
            resultado.push(array[i] * numero);
        }
    }

    return resultado;
}

console.log(primeiraMultiplicacao([2, 2], 2));
console.log(segundaMultiplicacao([10, 20, 3, 4], 2));