// Faça um algoritmo que calcule o fatorial de um número.

const fatorial = (numero) => {
    let resultado = 1;

    for (i = 1; i <= numero; i++) {
        resultado *= i
    }

    return resultado;
}

console.log(fatorial(5))