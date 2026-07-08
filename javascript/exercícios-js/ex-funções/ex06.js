// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

const montante = (capitalInicial, taxaJuros, tempoAplicacao) => {
    const taxa = taxaJuros * 0.01;
    const resultado = capitalInicial * (1 + taxa * tempoAplicacao);
    console.log(`O montante é R$ ${resultado.toFixed(2)}`);
}

const jurosCompostos = (capitalInicial, taxaJuros, tempoAplicacao) => {
    const taxa = taxaJuros * 0.01;
    const resultado = capitalInicial * (1 + taxa) ** tempoAplicacao;
    console.log(`Juros compostos de R$ ${resultado.toFixed(2)}`);
}

montante(1000, 2, 10);
jurosCompostos(100, 3, 10)