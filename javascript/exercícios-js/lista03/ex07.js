// Crie uma função que recebe quatro números como parâmetro (número, mínimo, máximo, inclusivo) e retorne se o parâmetro número (o primeiro)
// está entre o mínimo e máximo. Quando o parâmtro inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se o número
// é igual a mínimo ou a máximo. Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica
// será exclusiva, não considerando se número é igual a mínimo ou máximo.

function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if(inclusivo) {
        return numero >= minimo && numero <= maximo;
    }

    return numero > minimo && numero < maximo;
}

console.log(estaEntre(10, 50, 100));
console.log(estaEntre(16, 100, 160));
console.log(estaEntre(3, 3, 150));
console.log(estaEntre(3, 3, 150, true));