// Crie um objeto para representar uma pessoa.

// Cada pessoa possui:
// nome
// idade
// profissão
// salário

// Faça funções para:
// exibir dados
// alterar salário
// fazer aniversário (+1 idade)
// trocar profissão

class Pessoa {
    
    constructor(nome, idade, profissao, salario) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.salario = salario;
    }

    exibirDados() {
        console.log(`Olá, me chamo ${this.nome}, tenho ${this.idade} ano(s), sou ${this.profissao} e ganho R$ ${this.salario.toFixed(2)}`);
    }

    alterarSalario(salario) {
        this.salario = salario;
    }

    fazerAniversario() {
        this.idade += 1;
    }

    trocarProfissao(profissao) {
        this.profissao = profissao;
    }
}

const pessoa1 = new Pessoa("Guilherme", 20, "estudante", 1200);
pessoa1.alterarSalario(5000);
pessoa1.fazerAniversario();
pessoa1.trocarProfissao('Desenvolvedor');
pessoa1.exibirDados();