// O programa gera um número entre 1 e 100.

// Enquanto o usuário não acertar:
// Maior
// Menor

// Quando acertar:
// Parabéns!
// Você acertou em X tentativas.

function adivinharNumero(numero) {
    const numeroAleatorio = 29;

    if(typeof numero !== 'number' || numero <= 0 || numero > 100) {
        return 'Número inválido.'
    }

    if(numero < numeroAleatorio) {
        return 'O número sorteado é maior.';
    } 
        
    if(numero > numeroAleatorio) {
        return 'O número sorteado é menor';
    }
    
    if(numero === numeroAleatorio) {
        return `Parabéns! Você acertou!`;
    }
}

console.log(adivinharNumero(31));
console.log(adivinharNumero(57));
console.log(adivinharNumero(1));
console.log(adivinharNumero(16));
console.log(adivinharNumero(22));
console.log(adivinharNumero(29));