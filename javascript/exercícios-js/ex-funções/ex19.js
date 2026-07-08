// O cardápio de uma lanchonete é o seguinte:

// Código   Descrição do Produto     Preço
// ----------------------------------------
//  100       Cachorro Quente       R$ 3,00
//  200      Hambúrguer Simples     R$ 4,00
//  300        Cheeseburguer        R$ 5,50
//  400           Bauru             R$ 7,50
//  500        Refrigerante         R$ 3,50
//  600           Suco              R$ 2,80

// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente.

function lanchonete(codigoProduto, quantidade) {
    let total;
    
    switch(codigoProduto) {
        case 100:
            total = quantidade * 3;
            return `${quantidade} cachorro(s) quente(s) por R$ ${total.toFixed(2)}`;
        case 200:
            total = quantidade * 4;
            return `${quantidade} hambúrguer(s) simples por R$ ${total.toFixed(2)}`;
        case 300:
            total = quantidade * 5.5;
            return `${quantidade} cheeseburguer(s) por R$ ${total.toFixed(2)}`;
        case 400:
            total = quantidade * 7.5;
            return `${quantidade} bauru(s) por R$ ${total.toFixed(2)}`;
        case 500:
            total = quantidade * 3.5;
            return `${quantidade} refrigerante(s) por R$ ${total.toFixed(2)}`;
        case 600:
            total = quantidade * 2.8;
            return `${quantidade} suco(s) por R$ ${total.toFixed(2)}`;
        default:
            return 'Produto não existente.'
    }
}

console.log(lanchonete(100, 3));
console.log(lanchonete(200, 5));
console.log(lanchonete(300, 2));
console.log(lanchonete(400, 2));
console.log(lanchonete(500, 4));
console.log(lanchonete(600, 1));
console.log(lanchonete(700, 1));