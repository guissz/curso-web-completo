// Receba o valor de uma compra.

// Regras:
// até R$100 → sem desconto
// acima de R$100 → 10%
// acima de R$300 → 15%
// acima de R$500 → 20%

// Mostre:
// Valor original
// Desconto
// Valor final

const calcularDesconto = (valorCompra) => {
    if(valorCompra <= 0) {
        return {
            erro: 'Valor de compra inválido'
        }
    }

    let desconto = 0;
    let valorFinal;

    if(valorCompra > 500) {
        desconto = valorCompra * 0.2;
    } else if(valorCompra > 300) {
        desconto = valorCompra * 0.15;
    } else if(valorCompra > 100) {
        desconto = valorCompra * 0.1;
    }

    valorFinal = valorCompra - desconto;

    return {
        valorCompra: valorCompra,
        desconto: desconto,
        valorFinal: valorFinal
    }
}

console.log(calcularDesconto(150));
console.log(calcularDesconto(70));
console.log(calcularDesconto(500));