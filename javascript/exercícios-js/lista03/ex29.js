// Crie uma função que recebe um array de números e retorna p segundo maior valor presente neste array.

const segundoMaior = array => [...new Set(array)].sort((a, b) => b - a)[1];

console.log(segundoMaior([12, 16, 1, 5]));