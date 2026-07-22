// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na quantidade especificada no parâmetro.

const simboloMais = (numero) => {
    string = ''
    for(let i = 0; i < numero; i++) {
        string += '+';
    }

    return string;
}

console.log(simboloMais(3));
console.log(simboloMais(10));