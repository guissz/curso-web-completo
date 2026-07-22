// Criar uma função que receba um array de números e retorne o menor número deste array.

const menorNumero = array => {
    const menor = Math.min(...array);
    return array.filter(numero => numero === menor);
}


console.log(menorNumero([10, 5, 35, 65]));
console.log(menorNumero([5, -15, 50, 3]));