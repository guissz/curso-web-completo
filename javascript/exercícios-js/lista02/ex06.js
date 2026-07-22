// Crie um objeto:
// const conta = {
//     titular: "João",
//     saldo: 1000
// }

// Implemente funções para:
// sacar
// depositar
// consultar saldo
// alterar titular

// Valide saldo insuficiente.

const contaBancaria = {
    titular: 'Guilherme',
    saldo: 0,

    sacar(valorSaque) {
        if(valorSaque <= 0 || typeof valorSaque !== 'number') {
            return 'Valor inválido.'
        }

        if(this.saldo < valorSaque) {
            return 'Saldo insuficiente';
        } 
            
        this.saldo -= valorSaque;
        return `Valor sacado: R$ ${valorSaque.toFixed(2)}`;
    },


    depositar(valorDeposito) {
        if(valorDeposito <= 0 || typeof valorDeposito !== 'number') {
            return 'Valor inválido.'
        }
            
        this.saldo += valorDeposito;
        return `Valor depositado: R$ ${valorDeposito.toFixed(2)}`;
    },

    consultarSaldo() {
        return `${this.titular}, seu saldo atual é R$ ${this.saldo.toFixed(2)}`;
    },

    alterarTitular(novoTitular) {
        if(typeof novoTitular !== 'string' || novoTitular.trim().length === 0) {
            return 'Novo titular inválido.'
        }
            
        this.titular = novoTitular;
        return `Novo titular da conta: ${this.titular}`
    },

    mostrarConta() {
        return {
            titular: this.titular,
            saldo: Number(this.saldo.toFixed(2))
        };
    }
}

console.log(contaBancaria.depositar(500));
console.log(contaBancaria.consultarSaldo());
console.log(contaBancaria.sacar(100));
console.log(contaBancaria.consultarSaldo());
console.log(contaBancaria.alterarTitular('Vanessa'));
console.log(contaBancaria.consultarSaldo());