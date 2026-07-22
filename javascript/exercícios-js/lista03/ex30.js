// Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão num array. Você deverá calcular
// a média da nota de cada aluno e retornar um objeto com os atributos nome e media, que indica o aluno que teve o maior desempenho
// nas notas.

function receberMelhorEstudante(objeto) {
    const mediasEstudantes = Object.entries(objeto).map(([nome, notas]) => {
        const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
        const media = (soma / notas.length).toFixed(3);

        return{ nome, media };
    })

    return mediasEstudantes.reduce((melhor, atual) => {
        return atual.media > melhor.media ? atual : melhor;
    })
}

console.log(receberMelhorEstudante({
    'João': [8, 7.6, 8.9, 6],
    'Mariana': [9, 6.6, 7.9, 8],
    'Carla': [7, 7, 8, 9],
}))