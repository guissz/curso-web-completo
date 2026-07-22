// Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

const notas = [];

function mediaPonderadaNotas(codigoAluno, notas) {
    let maiorNota = notas[0];
    let peso;
    let maiorPesoUsado = false
    let somaValoresPeso = 0;
    let somaPesos = 0;
    let mediaPonderada;
    
    
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] > maiorNota) {
            maiorNota = notas[i];
        }
    }

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] === maiorNota && !maiorPesoUsado) {
            peso = 4;
            maiorPesoUsado = true;
        } else {
            peso = 3;
        }
        somaValoresPeso += notas[i] * peso;
        somaPesos += peso;
    }

    mediaPonderada = somaValoresPeso / somaPesos;

    if (mediaPonderada >= 5) {
        return `Código do aluno: ${codigoAluno}
                Notas: ${notas}
                Média: ${mediaPonderada}
                Situação: APROVADO!`
    } else {
        return `Código do aluno: ${codigoAluno}
                Notas: ${notas}
                Média: ${mediaPonderada}
                Situação: REPROVADO!`
    }
}
