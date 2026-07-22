// A fim de manter o calendário anual ajustado com o movimento de translação da terra, criou-se os anos bissextos, que têm 366 dias em
// vez dos 365 presentes no anos normais.
// Para determinar se um ano é bissexto, é necessário saber se ele é múltiplo de 4. Não pode ser múltiplo de 100, exceto se também for
// múltiplo de 400.
// Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano bissexto e retorna se ele é bissexto ou não.

function checarAnoBissexto(ano) {
    if(typeof ano !== 'number') {
        return 'Ano inválido.';
    }
    
    if(ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
        return `O ano ${ano} é bissexto.`;
    } else {
        return `O ano ${ano} não é bissexto.`;
    }
}

console.log(checarAnoBissexto(2020));
console.log(checarAnoBissexto(2100));