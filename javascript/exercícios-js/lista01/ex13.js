// Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

function diaDaSemana (dia) {
    switch (dia) {
        case 1:
        case 8:
        case 15:
        case 22:
        case 29:
            return 'Domingo';
        case 2:
        case 9:
        case 16:
        case 23:
        case 30:
            return 'Segunda-feira';
        case 3:
        case 10:
        case 17:
        case 24:
            return 'Terça-feira';
        case 4:
        case 11:
        case 18:
        case 25:
            return 'Quarta-feira';
        case 5:
        case 12:
        case 19:
        case 26:
            return 'Quinta-feira';
        case 6:
        case 13:
        case 20:
        case 27:
            return 'Sexta-feira';
        case 7:
        case 14:
        case 21:
        case 28:
            return 'Sábado';
        default:
            return 'Dia inválido';
    }
}

console.log(diaDaSemana(21));
console.log(diaDaSemana(29));
console.log(diaDaSemana(5));
console.log(diaDaSemana(16));
console.log(diaDaSemana(31));