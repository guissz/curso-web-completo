// Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

function anuidade (mes, valorAnuidade) {
    
    if (mes >= 13 || mes <= 0) {
        return 'Mês inválido';
    } else {
        const taxa = 5 * 0.01;
        const resultado = valorAnuidade * (1 + taxa) ** (mes - 1);
        return `Valor a ser pago: R$ ${resultado.toFixed(2)}`;
    }
}

console.log(anuidade(5, 1000));