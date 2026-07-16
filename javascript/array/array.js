console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Paulo'
aprovados.push('Abia') //push() insere um novo elemento ao array
console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados.length);
console.log(aprovados === undefined);

console.log(aprovados);
aprovados.sort(); //ordena o array em ordem ascendente
console.log(aprovados);

delete aprovados[1];
console.log(aprovados[1]);

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 1, 'Elemento1', 'Elemento2') //adiciona e/ou remove elementos do array
console.log(aprovados);