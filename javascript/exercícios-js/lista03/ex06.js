// Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o retorno da função deverá ser 
// o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for numérico o retorno deverá ser o número inverso.
// Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro de entrada não for nenhum dos tipos acima, retorne
// "booleano ou número esperados, mas o parâmetro é do tipo ...".

function inverso(parametro) {
    if(typeof parametro === 'boolean') {
        return !parametro;
    }

    if(typeof parametro === 'number') {
        return parametro * -1;
    }

    if(typeof parametro !== 'number' || typeof parametro !== 'boolean') {
        return `Booleano ou número esperados, mas o parâmetro é do tipo ${typeof parametro}`;
    }
}

console.log(inverso(true));
console.log(inverso('6'));
console.log(inverso(2000));
console.log(inverso("Programação"));