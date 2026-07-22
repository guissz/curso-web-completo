// Crie uma função que receba:
// número
// número
// operação

// Operações:
// +
// -
// *
// /
// **
// %

// Utilize switch.

const calculadora = (valor1, operacao, valor2) => {
    
    let resultado;
    
    if(typeof valor1 !== "number" || typeof valor2 !== "number") {
        return 'Os valores precisam ser números!';
    } else {
        switch(operacao) {
            case '+':
                resultado = valor1 + valor2;
                break;
            case '-':
                resultado = valor1 - valor2;
                break;
            case '*':
                resultado = valor1 * valor2;
                break;
            case '/':
                if(valor2 == 0) {
                    return 'Não existe divisão por 0';
                } else {
                    resultado = valor1 / valor2;
                    break;
                }
            case '**':
                resultado = valor1 ** valor2;
                break;
            case '%':
                if(valor2 == 0) {
                    return 'Não existe divisão por 0';
                } else {
                    resultado =  valor1 % valor2;
                    break;
                }
            default:
                return 'Operação inválida';
        }
    }

    return {
        operacao: operacao,
        valor1: valor1,
        valor2: valor2,
        resultado: resultado
    }
}

console.log(calculadora(29, '+', 12));
console.log(calculadora(12, '-', 29));
console.log(calculadora(5, '*', 10));
console.log(calculadora(31, '/', 3));
console.log(calculadora(31, '/', 0));
console.log(calculadora(2, '**', 8));
console.log(calculadora(31, '%', 3));
console.log(calculadora('31', '+', 0));
console.log(calculadora(31, '+', '0'));