// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham
// índices pares.

function receberParesDeIndicePar(array) {
    return array.filter((numero, indice) => numero % 2 === 0 && indice % 2 === 0);
}

console.log(receberParesDeIndicePar([1, 2, 3, 4]));
console.log(receberParesDeIndicePar([10, 70, 22, 43]));