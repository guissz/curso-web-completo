// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao objeto recebido como parâmetro,
// porém com as posições das chaves e valores invertidas.

const inverter = objeto => Object.fromEntries(Object.entries(objeto).map(([chave, valor]) => [valor, chave]));

console.log(inverter({
    a: 1,
    b: 2,
    c: 3
}))