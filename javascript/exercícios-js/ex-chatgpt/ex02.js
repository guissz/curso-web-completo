// Crie uma função que receba:
// peso
// altura

// Ela deve retornar um objeto contendo:

// {
//     imc: 22.8,
//     classificacao: "Peso normal"
// }

const calcularIMC = (peso, altura) => {
    
    if(peso <= 0 || altura <= 0) {
        return {
            erro: 'Peso e altura devem ser maiores que 0'
        }
    }
    
    const imc = peso / Math.pow(altura, 2);
    let classificacao;
    
    if(imc < 18.5) {
        classificacao = 'Magreza';
    } else if(imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Peso normal';
    } else if(imc >= 25 && imc <= 29.9) {
        classificacao = 'Sobrepeso';
    } else if(imc >= 30 && imc <= 39.9) {
        classificacao = 'Obesidade';
    } else {
        classificacao = 'Obesidade grave';
    }

    return {
        imc: imc.toFixed(2),
        classificacao: classificacao
    }
}

console.log(calcularIMC(75, 1.72));
console.log(calcularIMC(0, 1.72));
console.log(calcularIMC(75, 0));