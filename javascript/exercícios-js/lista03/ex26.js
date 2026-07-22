// Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as consoantes, ou seja, sem as vogais

const removerVogais = string => string.replace(/[aeiouáéíóúâêîôûãõàèìòù]/gi, '');

console.log(removerVogais('Cod3r'));