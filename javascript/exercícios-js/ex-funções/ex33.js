// Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
// quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
// Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
// mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console

const vetorInteiro = [1, 3, 5, 7];
const vetorString = ['Ana', 'Bia', 'Carlos', 'Daniel'];
const vetorDouble = [1.2, 2.4, 3.6, 4.8];

let resultado = vetorInteiro.concat(vetorString);
resultado = resultado.concat(vetorDouble);

console.log(resultado.join(', '));