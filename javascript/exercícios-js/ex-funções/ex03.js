//Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

const potencia = (base, expoente) => {
    let resultado = 1;
    
    for (let i = 1; i <= expoente; i++) {
        resultado *= base;
    }
    console.log(resultado);
}

potencia(2, 2);
potencia(5, 3);