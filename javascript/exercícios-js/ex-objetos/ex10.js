// Objeto:
// const filme = {
//     titulo: "",
//     alugado: false
// }

// Crie funções para:
// alugar
// devolver
// verificar disponibilidade

const filme = {
    titulo: 'Homem-Aranha',
    alugado: false,

    alugar() {
        if(this.alugado) {
            return `O filme ${this.titulo} já está alugado.`
        }

        this.alugado = true;
        return `Você alugou o filme ${this.titulo}.`;
    },

    devolver() {
        if(!this.alugado) {
            return `O filme ${this.titulo} ainda não foi alugado.`;
        }

        this.alugado = false;
        return `Você devolveu o filme ${this.titulo}`;
    },

    verificarDisponibilidade() {
        return {
            titulo: this.titulo,
            disponivel: !this.alugado
        }
    }
}

console.log(filme.verificarDisponibilidade());
console.log(filme.alugar());
console.log(filme.verificarDisponibilidade());
console.log(filme.devolver());

