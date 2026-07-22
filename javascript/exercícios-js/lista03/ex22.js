// Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado um número aleatório de 1 a 10.
// A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado internamente. Se o valor fornecido foi o sorteado,
// retorne "Parabéns! O número sorteado foi o X.". Se não for igual, retorne "Que pena! O número sorteado foi o X.". 

const funcaoDaSorte = numero => {
    if(typeof numero !== 'number' || numero < 1 || numero > 10) {
        return 'Número inválido.'
    }
    
    const sorteado = Math.floor(Math.random() * 10 - 1 + 1) + 1;

    if(numero !== sorteado) {
        return `Que pena! O número sorteado foi o ${sorteado}`;
    }

    return `Parabéns! O número sorteado foi o ${sorteado}`;
}

console.log(funcaoDaSorte(10));
