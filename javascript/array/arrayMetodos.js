const pilotos = ['Vette', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(0); // remove o último elemento do array
console.log(pilotos);

pilotos.push('Verstappen'); // adiciona o elemento à última posição do array
console.log(pilotos);

pilotos.shift(); // remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift('Hamilton'); // adicona o elemento à primeira posição do array
console.log(pilotos);

pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

pilotos.splice(3, 1); // remove o Massa novamente
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2) // retorna um novo array à partir do elemento de índice 2
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);