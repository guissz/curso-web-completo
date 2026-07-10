// Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
// ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
// para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

const imprimirImpares = (inicio, fim) => {
    let impares = [];
    
    if(fim < inicio) {
        return 'O número inicial é maior que o final.'; 
    } else {
        for(i = inicio; i <= fim; i++) {
            if(i % 2 == 1) {
                impares.push(i);
            }
        }
    }

    return impares;
}

console.log(imprimirImpares(0, 100));
console.log(imprimirImpares(100, 0));