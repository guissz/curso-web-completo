// Crie uma função que recebe um array e retorne o primeiro e último elemento deste array como um novo array.

const receberPrimeiroEUltimoElemento = array => {
    return [array[0], array[array.length - 1]];    
}

console.log(receberPrimeiroEUltimoElemento([7, 14, 'Olá']));
console.log(receberPrimeiroEUltimoElemento([-10, 'aplicativo', 16]));