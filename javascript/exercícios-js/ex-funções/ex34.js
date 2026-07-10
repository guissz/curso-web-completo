// Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

function contarCaracteres(str1, str2) {
    const palavra1 = str1.toLowerCase();
    const palavra2 = str2.toLowerCase();

    for(let i = 0; i < palavra1.length; i++) {
        if(palavra2.includes(palavra1[i])) {
        } else {
            return false;
        }
    }

    for(let i = 0; i < palavra2.length; i++) {
        if(palavra1.includes(palavra2[i])) {
        } else {
            return false;
        }
    }

    return true;
}

console.log(contarCaracteres('abc', 'cba'));
console.log(contarCaracteres('Casa', 'saca'));
console.log(contarCaracteres('Javascript', 'scriptjava'));
console.log(contarCaracteres('AAA', 'a'));
console.log(contarCaracteres('AbC', 'cBa'));
console.log(contarCaracteres('abc', 'ab'));
console.log(contarCaracteres('ab', 'abc'));
console.log(contarCaracteres('ab', 'abc'));
console.log(contarCaracteres('javascript', 'java'));
console.log(contarCaracteres('mouse', 'house'));
console.log(contarCaracteres('carro', 'caro'));