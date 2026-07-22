// Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos apenas modificando-o, mas, em
// essência, o objeto continua o mesmo, ou seja a sua referência de memória é a mesma.
// Num projeto que você está trabalhando, vocÇe foi designado para refatroar diversas funções para que façam cópias de objetos e manipulem
// os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em algumas situações devido à referências à objetos. Abaixo, está 
// a descrição de uma dessas funções:
// Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome de uma propriedade contida neste
// objeto. Em seguida, retorne uma cópia deste objeto sem a propriedade especificada no segundo parâmetro.

function removerPropriedade(objeto, propriedade) {
    if(!(propriedade in objeto)) {
        return `A propriedade ${propriedade} não existe.`;
    }

    delete objeto[propriedade];
    return objeto;
}

console.log(removerPropriedade({a: 1, b: 2}, "a"));
console.log(removerPropriedade({a: 1, b: 2}, "c"));