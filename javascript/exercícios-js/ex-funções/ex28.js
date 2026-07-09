// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function contadorParImpar (array) {
    let contadorImpar = 0;
    let contadorPar = 0;
    
    for(let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            contadorPar++;
        } else {
            contadorImpar++;
        }
    }

    return `Quantidade de números ímpares: ${contadorImpar}. Quantidade de números pares: ${contadorPar}`;
}

console.log(contadorParImpar([20, 18, 13, 15, 16, 61, 22, 19, 30, 40, 45, 101, 1, 6, 92]));