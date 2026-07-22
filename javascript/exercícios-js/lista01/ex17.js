// Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:

// Plano Aumento
//   A     10%
//   B     15%
//   C     20%

// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

function novoSalario(planoTrabalho, salarioAtual) {
    let novoSalario;
    const planoMinuscula = planoTrabalho.toLowerCase()

    switch(planoMinuscula) {
        case 'a':
            novoSalario = salarioAtual + (salarioAtual * 0.1);
            return novoSalario;
        case 'b':
            novoSalario = salarioAtual + (salarioAtual * 0.15);
            return novoSalario;
        case 'c':
            novoSalario = salarioAtual + (salarioAtual * 0.2);
            return novoSalario;
        default:
            return 'Plano inválido';
    }
}

console.log(novoSalario('a', 1000));
console.log(novoSalario('b', 1000));
console.log(novoSalario('c', 1000));
console.log(novoSalario('d', 1000));