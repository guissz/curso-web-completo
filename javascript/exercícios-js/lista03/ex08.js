// Desenvolva uma função que recebe dois números inteiros não negativos e realize a multiplicação deles. Porém, não utilize o operador de
// multiplicação.

const multiplicar = (num1, num2) => {
    if(num1 < 0 || num2 < 0) {
        return 'Número inválido';
    }

    let resultado = 0;
    for(let i = 0; i < num2; i++) {
        resultado += num1;
    }

    return resultado;
}

console.log(multiplicar(5, 5));
console.log(multiplicar(0, 7));
console.log(multiplicar(2, 4));
console.log(multiplicar(9, 10));