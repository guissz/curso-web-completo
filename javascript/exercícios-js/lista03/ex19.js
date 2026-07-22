// Numa aplicação web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, pretende-se adicionar a funcionalidade
// de calcular a média de um conjunto de números informados pelo usuário.
// Com o intuito de realizar este cálculo, crie uma função que receba um array com uma quantidade indeterminada de números e retorne a
// média simples desses números.

const calcularMedia = array => {
    const somaTotal = array.reduce((total, acumulador) => {
        return total + acumulador
    }, 0)

    return somaTotal / array.length;
}

console.log(calcularMedia([1, 2, 3, 4, 5]));
console.log(calcularMedia([0, 10]));