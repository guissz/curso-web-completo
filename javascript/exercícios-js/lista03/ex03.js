// Desenvolva uma função que recebe dois parâmetros: um é a quantidade de horas trabalhadas por um funcionário num mês, e o quanto
// ele recebe por hora. O retorno da função deve ser a String "Salário igual a R$ X", em que X é o quanto ele ganhou no mês.

const calcularSalario = (horasTrabalhadas, salarioHora) => {
    const salario = horasTrabalhadas * salarioHora;
    return `Salário igual a R$ ${salario}`;
}

console.log(calcularSalario(150, 40.5));