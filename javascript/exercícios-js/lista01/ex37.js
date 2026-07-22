// Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
// como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
// bem como a soma dos elementos.

const progressaoAritmetica = (numeroTermo, primeiroTermo, razao) => {
    let termo = primeiroTermo;
    let termos = [];
    let soma = 0;

    for(let i = 0; i < numeroTermo; i++) {
        termos.push(termo);
        soma += termo;
        termo += razao;
    }

    return [termos, soma];
}

const progressaoGeometrica = (numeroTermo, primeiroTermo, razao) => {
    let termo = primeiroTermo;
    let termos = [];
    let soma = 0;

    for(let i = 0; i < numeroTermo; i++) {
        termos.push(termo);
        soma += termo;
        termo *= razao;
    }

    return [termos, soma];
}

console.log(progressaoAritmetica(5, 2, 3));
console.log(progressaoGeometrica(5, 2, 3));