// Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => a.age - b.age);

// Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.

people.sort((a, b) => b.age - a.age);

// console.log(people);

// Relembrando as HOFs

const pessoas = [
  { nome: 'Joana', idade: 37 },
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 32 },
  { nome: 'Aline', idade: 28 },
];

// forEach

pessoas.forEach((pessoa) => console.log(`Nome: ${pessoa.nome}`));

// find

const encontrando = pessoas.find((pessoa) => pessoa.nome === 'Aline');
console.log(encontrando);

// some

const algum = pessoas.some((pessoa) => pessoa.idade > 30);
console.log(algum);

// every 

const todos = pessoas.every((pessoa) => pessoa.idade > 30);
console.log(todos);

// sort

pessoas.sort((a, b) => a.idade - b.idade);
console.log(pessoas);

// map

const nomes = pessoas.map((pessoa) => pessoa.nome);
console.log(nomes);