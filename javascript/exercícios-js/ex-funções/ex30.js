// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

const maiorMenor = (array) => {
    let maior = 0;
    let menor;

    for(i = 0; i < array.length; i++) {
        if(array[i] > maior) {
            maior = array[i];
        } else if (array[i] < menor) {
            menor = array[i]
        }

        if(i == 0) {
            menor = array[i];
        }
    }
    return `Menor valor: ${menor}. Maior valor: ${maior}`;
}

console.log(maiorMenor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));