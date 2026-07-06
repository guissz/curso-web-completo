function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado:
    let velocidadeAtual = 0;

    //método público:
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    //método público:
    this.getVelocidadAtual = function() {
        return velocidadeAtual;
    }
}

const uno = new Carro;
uno.acelerar();
console.log(uno.getVelocidadAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar;
console.log(ferrari.getVelocidadAtual());