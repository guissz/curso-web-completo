// Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

const triangulo = (lado1, lado2, lado3) => {
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        console.log('É um triângulo');

        const equilatero = lado1 == lado2 && lado1 == lado3;
        const isoceles = lado1 == lado2 && lado1 != lado3 || lado1 == lado3 && lado1 != lado2 || lado2 == lado3 && lado2 != lado1;
        const escaleno = lado1 != lado2 && lado1 != lado3 && lado2 != lado3;

        if (equilatero) {
            console.log('Equilátero');
        }

        if (isoceles) {
            console.log('Isóceles');
        }

        if (escaleno) {
            console.log('Escaleno');
        }

    } else {
        console.log('Não é um triângulo');
    }
}

triangulo(3, 4, 5); //escaleno
triangulo(5, 4, 4); //isóceles
triangulo(5, 5, 5); //equilátero
triangulo(10, 7, 2); //não é triângulo