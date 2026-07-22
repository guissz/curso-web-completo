// Receba um valor inteiro.

// Exemplo:
// 286

// Mostre:
// 2 notas de 100
// 1 nota de 50
// 1 nota de 20
// 1 nota de 10
// 1 nota de 5
// 1 nota de 1

// Use apenas operadores matemáticos (/, %) e estruturas de controle.

function caixaEletronico(valor) {
    const nota100 = 100;
    const nota50 = 50;
    const nota20 = 20;
    const nota10 = 10;
    const nota5 = 5;
    const nota1 = 1;

    let qtdNotas100 = 0;
    let qtdNotas50 = 0;
    let qtdNotas20 = 0;
    let qtdNotas10 = 0;
    let qtdNotas5 = 0;
    let qtdNotas1 = 0;

    while(valor > 0) {
        if(valor >= 100) {
            qtdNotas100 = Math.floor(valor / nota100);
            valor %= nota100;
        } else if(valor >= 50) {
            qtdNotas50 = Math.floor(valor / nota50);
            valor %= nota50;
        } else if(valor >= 20) {
            qtdNotas20 = Math.floor(valor / nota20);
            valor %= nota20;
        } else if(valor >= 10) {
            qtdNotas10 = Math.floor(valor / nota10);
            valor %= nota10;
        } else if(valor >= 5) {
            qtdNotas5 = Math.floor(valor / nota5);
            valor %= nota5;
        } else {
            qtdNotas1 = Math.floor(valor / nota1);
            valor %= nota1;
        }
    }

    if(qtdNotas100 > 0) {
        console.log(`${qtdNotas100} nota(s) de 100`);
    } 
    
    if(qtdNotas50 > 0) {
        console.log(`${qtdNotas50} nota(s) de 50`);
    } 
    
    if(qtdNotas20 > 0) {
        console.log(`${qtdNotas20} nota(s) de 20`);
    }
    
    if(qtdNotas10 > 0) {
        console.log(`${qtdNotas10} nota(s) de 10`);
    }
    
    if(qtdNotas5 > 0) {
        console.log(`${qtdNotas5} nota(s) de 5`);
    } 
    
    if(qtdNotas1 > 0) {
        console.log(`${qtdNotas1} nota(s) de 1`);
    }
}

caixaEletronico(286);