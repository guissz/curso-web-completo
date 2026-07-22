// const carro = {
//     marca: "",
//     modelo: "",
//     ano: 0,
//     ligado: false
// }

// Implemente:
// ligar
// desligar
// acelerar
// frear
// mostrar informações

// Não permita acelerar com o carro desligado.

const carro = {
    marca: 'Honda',
    modelo: 'Civic',
    ano: 2024,
    ligado: false,
    velocidadeAtual: 0,
    velocidadeMaxima: 190,

    ligar() {
        if(this.ligado) {
            return 'O carro já está ligado.';
        }

        this.ligado = true;
        return 'O carro foi ligado.';
    },

    desligar() {
        if(!this.ligado) {
            return 'O carro já está desligado.';
        }

        if(this.velocidadeAtual > 0) {
            return 'Não é possível desligar o carro em movimento';
        }

        this.ligado = false;
        return 'O carro foi desligado.';
    },

    acelerar() {
        if(!this.ligado) {
            return 'Não é possível acelerar com o carro desligado.';
        }

        if(this.velocidadeAtual + 10 > this.velocidadeMaxima) {
            return 'Velocidade máxima atingida.'
        }
        
        this.velocidadeAtual += 10;
        return 'Acelerando...';
    },

    frear() {
        if(!this.ligado) {
            return 'Não é possível frear com o carro desligado.';
        }

        if(this.velocidadeAtual === 0) {
            return 'Não é possível frear com o carro parado.'
        }

        this.velocidadeAtual -= 10;
        return 'Freando...';
    },

    mostrarInformacoes() {
        return {
            marca: this.marca,
            modelo: this.modelo,
            ano: this.ano,
            ligado: this.ligado,
            velocidadeAtual: this.velocidadeAtual
        }
    }
}

console.log(carro.ligar());
console.log(carro.acelerar());
console.log(carro.acelerar());
console.log(carro.acelerar());
console.log(carro.acelerar());
console.log(carro.acelerar());
console.log(carro.acelerar());
console.log(carro.acelerar());
console.log(carro.acelerar());
console.log(carro.acelerar());
console.log(carro.mostrarInformacoes());
console.log(carro.desligar());
console.log(carro.frear());
console.log(carro.frear());
console.log(carro.frear());
console.log(carro.frear());
console.log(carro.frear());
console.log(carro.frear());
console.log(carro.frear());
console.log(carro.frear());
console.log(carro.frear());
console.log(carro.desligar());
console.log(carro.mostrarInformacoes());