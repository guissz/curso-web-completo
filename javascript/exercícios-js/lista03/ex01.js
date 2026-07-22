// Crie uma função que retorna a string "Olá, " concatenada com um argumento tex (a ser passado para a função) e com ponto de 
// exclamação "!" no final.

function cumprimentar(nome) {
    if(typeof nome !== "string" || nome.trim().length === 0) {
        return 'Nome inválido';
    }

    return `Olá, ${nome}!`;
}

console.log(cumprimentar('Guilherme'));
console.log(cumprimentar(''));
console.log(cumprimentar(123));