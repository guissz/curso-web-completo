// Crie um sistema que gerencie um único livro.

// Objeto:
// const livro = {
//     titulo: "",
//     autor: "",
//     disponivel: true,
//     usuario: ""
// }

// Implemente funções para:
// emprestar
// devolver
// alterar título
// alterar autor
// verificar disponibilidade
// mostrar informações completas

// Valide:
// não emprestar um livro já emprestado;
// não devolver um livro que já está disponível.

const livro = {
    titulo: 'O Príncipe',
    autor: 'Nicolau Maquiavel',
    disponivel: true,
    usuario: '',

    emprestarLivro(novoUsuario) {
        if(!this.disponivel) {
            return `O livro ${this.titulo} já está emprestado para ${this.usuario}.`;
        }

        this.disponivel = false;
        this.usuario = novoUsuario;
        return `O livro ${this.titulo} foi emprestado para ${this.usuario}.`;
    },

    devolverLivro() {
        if(this.disponivel) {
            return `O livro ${this.titulo} ainda não foi emprestado.`;
        }

        this.disponivel = true;
        this.usuario = '';
        return `O livro ${this.titulo} foi devolvido.`;
    },

    alterarTitulo(novoTitulo) {
        if(typeof novoTitulo !== 'string' || novoTitulo.trim().length === 0) {
            return 'Título inválido.';
        }

        this.titulo = novoTitulo;
        return `Novo título: ${this.titulo}`;
    },

    alterarAutor(novoAutor) {
        if(typeof novoAutor !== 'string' || novoAutor.trim().length === 0) {
            return 'Autor inválido';
        }

        this.autor = novoAutor;
        return `Novo autor: ${this.autor}`;
    },

    verificarDisponibilidade() {
        if(this.disponivel) {
            return `O livro ${this.titulo} está disponível para ser emprestado.`;
        } else {
            return `O livro ${this.titulo} está emprestado para ${this.usuario}.`
        }
    },

    mostrarInformacoes() {
        return {
            titulo: this.titulo,
            autor: this.autor,
            disponivel: this.disponivel,
            usuario: this.usuario
        }
    }
}