// Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.

const contarIntervalo = (array) => {
    let foraDoIntervalo = 0;
    let dentroDoIntervalo = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 10 && array[i] <= 20) {
            dentroDoIntervalo++;
        } else {
            foraDoIntervalo++;
        }
    }

    return `Números dentro do intervalo: ${dentroDoIntervalo}. Números fora do intervalo: ${foraDoIntervalo}`;
}

console.log(contarIntervalo([11, 43, 21, 13, 10, 67, 76, 1, 9, 18, 15, 29, 99, 100, 204, 20]))