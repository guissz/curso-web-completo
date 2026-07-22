// Deenvolva uma função que recebe um caractere e uma string como parâmetro e retorne a quantidade de vezes que o caractere se repete
// na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas.

const contarCaractere = (string, letra) => string.split(letra).length - 1;

console.log(contarCaractere('A sorte favorece os audazes', 'r'));