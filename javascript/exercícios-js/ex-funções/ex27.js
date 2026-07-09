// Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

function crescimentoCrianca(alturaCrianca1, taxaCrescimento1, alturaCrianca2, taxaCrescimento2) {
    let menorAltura;
    let maiorAltura;
    let crescimentoMenor;
    let crescimentoMaior;
    let anos = 0;
    
    if (alturaCrianca1 < alturaCrianca2) {
        menorAltura = alturaCrianca1;
        maiorAltura = alturaCrianca2;
        crescimentoMenor = taxaCrescimento1;
        crescimentoMaior = taxaCrescimento2;
    } else if (alturaCrianca1 > alturaCrianca2) {
        menorAltura = alturaCrianca2;
        maiorAltura = alturaCrianca1;
        crescimentoMenor = taxaCrescimento2;
        crescimentoMaior = taxaCrescimento1;
    } else if (alturaCrianca1 === alturaCrianca2) {
        if (taxaCrescimento1 === taxaCrescimento2) {
            return 'As crianças permanecerão com a mesma altura.'
        } else {
            return 'A criança com maior taxa de crescimento passará a outra em 1 ano.'
        }
    }

    if (crescimentoMenor > crescimentoMaior) {
        while (menorAltura < maiorAltura) {
            menorAltura += crescimentoMenor;
            maiorAltura += crescimentoMaior;
            anos++;
        }
        return `A menor criança irá ultrapassar a maior em ${anos} ano(s).`;
    } else {
        return 'A menor criança nunca irá ultrapassar a maior.'
    }
}

console.log(crescimentoCrianca(120, 5, 130, 2));
console.log(crescimentoCrianca(120, 2, 130, 5));
console.log(crescimentoCrianca(120, 2, 120, 5));
console.log(crescimentoCrianca(130, 5, 130, 5));