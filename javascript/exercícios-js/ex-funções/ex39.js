// Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
// primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
// Faça a troca sem utilizar uma variável auxiliar.

function trocarVetores(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++) {
        [arr1[i], arr2[i]] = [arr2[i], arr1[i]];
    }

    return [arr1, arr2];
}

console.log(trocarVetores([1, 2, 3, 4], [4, 3, 2, 1]));