// Escreva uma função que recebe dois parãmetros. O primeiro parâmetro é o elemento que repetirá, enquanto o segundo será o número de 
// vezes que haverá repetição. Um array será retornado.

const repetir = (parametro, repetidor) => {
    if(typeof repetidor !== 'number') {
        return 'O repetidor deve ser um número.';
    }

    let array = [];
    for(let i = 0; i < repetidor; i++) {
        array.push(parametro);
    }

    return array;
}

console.log(repetir('Código', 2));
console.log(repetir(7, 3));