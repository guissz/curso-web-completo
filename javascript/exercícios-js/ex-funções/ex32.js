// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

const calcularMedia = (array) => {
    let somaValores = 0;
    let media;

    for(let i = 0; i < array.length; i++) {
        somaValores += array[i];
    }

    media = somaValores / array.length;

    return `A média dos valores é ${media}`;
}

console.log(calcularMedia([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]));