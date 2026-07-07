// Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

function calcular(valor1, valor2) {
    const soma = valor1 + valor2;
    const subtracao = valor1 - valor2;
    const multiplicacao = valor1 * valor2;
    const divisao = valor1 / valor2;

    console.log(`Soma: ${soma}`);
    console.log(`Subtração: ${subtracao}`);
    console.log(`Multiplicação: ${multiplicacao}`);
    console.log(`Divisão: ${divisao}`);
}

calcular(5, 5);
