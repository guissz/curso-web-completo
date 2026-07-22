// Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é possível adicionar produtos
// ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está desenvolvendo no momento é a de somar o total de 
// despesas. 
// Crie uma função que receba um array de produtos e retorne o total de despesas.

const calcularDespesas = array => array.reduce((total, produto) => {
    return total + produto.preco;
}, 0)

console.log(calcularDespesas([
    {nome: 'Jornal Online', categoria: 'Informação', preco: 89.99},
    {nome: 'Cinema', categoria: 'Entretenimento', preco: 150}
]));