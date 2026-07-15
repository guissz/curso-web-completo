// Objeto:
// const funcionario = {
//     nome: "",
//     cargo: "",
//     salario: 0
// }

// Faça funções para:
// promover
// aumentar salário (%)
// diminuir salário (%)
// exibir dados

const funcionario = {
    nome: 'Guilherme',
    cargo: 'Analista',
    salario: 2000,

    promover(novoCargo, porcentagem) {
        if(typeof novoCargo !== 'string' || novoCargo.trim().length === 0) {
            return 'Cargo inválido';
        }
        
        this.cargo = novoCargo;
        this.salario += this.salario * (porcentagem / 100);
        return `O funcionário ${this.nome} foi promovido para ${this.cargo}, agora ele recebe ${this.salario.toFixed(2)}`;
    },

    aumentarSalario(porcentagem) {
        if(typeof porcentagem !== 'number' || porcentagem <= 0) {
            return 'Porcentagem inválida';
        }
        
        this.salario += this.salario * (porcentagem / 100);
        return `O funcionário ${this.nome} recebeu um aumento de ${porcentagem} %`;
    },

    diminuirSalario(porcentagem) {
        if(typeof porcentagem !== 'number' || porcentagem <= 0) {
            return 'Porcentagem inválida';
        }

        this.salario -= this.salario * (porcentagem / 100);
        return `O funcionário ${this.nome} sofreu uma diminuição de ${porcentagem} %`;
    },

    exibirDados() {
        return {
            nome: this.nome,
            cargo: this.cargo,
            salario: `R$ ${this.salario.toFixed(2)}`
        }
    }
}

console.log(funcionario.exibirDados());
console.log(funcionario.promover('Desenvolvedor Júnior'));
console.log(funcionario.aumentarSalario(21));
console.log(funcionario.exibirDados());
console.log(funcionario.diminuirSalario(17));
console.log(funcionario.exibirDados());