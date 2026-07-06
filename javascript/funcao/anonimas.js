const soma = function(x, y) {
    return x + y;
}

const imprimirSoma = function (a, b, operacao = soma) {
    console.log(operacao(a, b));
}

imprimirSoma(3, 4);