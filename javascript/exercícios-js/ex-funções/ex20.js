// Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

function menorNumeroDeNotas (valor) {
    const nota200 = 200;
    const nota100 = 100;
    const nota50 = 50;
    const nota10 = 10;
    const nota5 = 5;
    const nota1 = 1;
    
    let qtdNotas200 = 0;
    let qtdNotas100 = 0;
    let qtdNotas50 = 0;
    let qtdNotas10 = 0;
    let qtdNotas5 = 0;
    let qtdNotas1 = 0;

    do {
        if (valor >= 200) {
            qtdNotas200 = Math.floor(valor / nota200);
            valor %= nota200;
        } else if (valor >= 100) {
            qtdNotas100 = Math.floor(valor / nota100);
            valor %= nota100;
        } else if (valor >= 50) {
            qtdNotas50 = Math.floor(valor / nota50);
            valor %= nota50;
        } else if (valor >= 10) {
            qtdNotas10 = Math.floor(valor / nota10);
            valor %= nota10;
        } else if (valor >= 5) {
            qtdNotas5 = Math.floor(valor / nota5);
            valor %= nota5;
        } else {
            qtdNotas1 = Math.floor(valor / nota1);
            valor %= nota1;
        }
    } while(valor > 0);

    if (qtdNotas200 > 0) {
        console.log(`${qtdNotas200} nota(s) de R$ 200.`);
    } 
    
    if (qtdNotas100 > 0) {
        console.log(`${qtdNotas100} nota(s) de R$ 100.`);
    } 
    
    if (qtdNotas50 > 0) {
        console.log(`${qtdNotas50} nota(s) de R$ 50.`);
    } 
    
    if (qtdNotas10 > 0) {
        console.log(`${qtdNotas10} nota(s) de R$ 10.`);
    } 
    
    if (qtdNotas5 > 0) {
        console.log(`${qtdNotas5} nota(s) de R$ 5.`);
    } 
    
    if (qtdNotas1 > 0) {
        console.log(`${qtdNotas1} nota(s) de R$ 1.`)
    }
}

menorNumeroDeNotas(38);
menorNumeroDeNotas(56);
