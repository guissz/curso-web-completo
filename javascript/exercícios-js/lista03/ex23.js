// Criar uma função que recebe uma string como parâmetro e conte quantas palavras tem nela.

const contarPalavras = string => string.trim().split(/\s+/).length;

console.log(contarPalavras('Sou uma frase'));