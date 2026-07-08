// Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
// numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
// 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.

function calculadora (valor1, operacao, valor2) {
    const soma = valor1 + valor2;
    const subtracao = valor1 - valor2;
    const multiplicacao = valor1 * valor2;
    const divisao = valor1 / valor2;

    switch(operacao) {
        case '+':
            return soma;
        case '-':
            return subtracao;
        case '*':
            return multiplicacao;
        case '/':
            return divisao;
        default:
            return 'Operação inválida.'
    }
}

console.log(calculadora(2, '+', 18));
console.log(calculadora(50, '-', 23));
console.log(calculadora(10, '*', 10));
console.log(calculadora(200, '/', 4));
console.log(calculadora(5, '**', 5));