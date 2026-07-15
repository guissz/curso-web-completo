// Objeto:
// const produto = {
//     nome: "",
//     preco: 0,
//     estoque: 20
// }

// Implemente:
// vender
// repor estoque
// alterar preço
// consultar produto

// Não permita vender mais do que existe no estoque.

const produto = {
    nome: 'Achocolatado',
    preco: 12.50,
    estoque: 20,

    vender(quantidade) {
        let totalVendido;
        
        if(typeof quantidade !== 'number' || quantidade <= 0) {
            return 'Quantidade inválida.'
        }

        if(quantidade > this.estoque) {
            return 'Estoque insuficiente.';
        }

        this.estoque -= quantidade;
        totalVendido = quantidade * this.preco;
        return {
            quantidade: quantidade,
            totalVendido: totalVendido,
            estoqueRestante: this.estoque
        }
    },

    reporEstoque(quantidade) {
        if(typeof quantidade !== 'number' || quantidade <= 0) {
            return 'Número de reposição inválido';
        }

        this.estoque += quantidade;
        return `${quantidade} itens reabastecidos`;
    },

    alterarPreco(novoPreco) {
        if(typeof novoPreco !== 'number' || novoPreco <= 0) {
            return 'Preço inválido';
        }

        this.preco = novoPreco;
        return `Novo preço: ${this.preco.toFixed(2)}`;
    },

    consultarProduto() {
        return {
            produto: this.nome,
            precoUnitario: this.preco,
            //quantidadeVendida: quantidade,
            //totalVendido: totalVendido.toFixed(2),
            estoqueRestante: this.estoque
        }
    }
}

console.log(produto.consultarProduto());