// Escreva uma função que recebe a idade de uma pessoa em anos e retorne a mesma idade em dias.
// Considere que um ano tem 365 dias. Desconsidere anos bissextos e desconsidere também dias ocorridos desde o último aniversário.

const converterIdadeEmDias = idade => idade * 365;

console.log(converterIdadeEmDias(20));