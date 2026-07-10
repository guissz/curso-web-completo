// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

const contarNegativos = (array) => {
    let negativos = 0;
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] < 0) {
            negativos++
        }
    }
    return `Quantidade de números negativos: ${negativos}`;
}

console.log(contarNegativos([1, -2, 3, -4, 5, -6, 7, -8, 9, -10]));