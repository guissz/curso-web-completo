// Escreva uma função que receba um array de números e retorne a a soma de todos os números deste array.

const somarNumeros = array => array.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0)

console.log(somarNumeros([10, 10, 10]));
console.log(somarNumeros([15, 15, 15, 15]));