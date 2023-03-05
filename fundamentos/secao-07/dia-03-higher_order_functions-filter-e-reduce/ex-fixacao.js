const valorItens = [1, 32, 44, 2, 3];

const soma = valorItens.reduce((acc, curr) => {
  // console.log(`acc:`, acc);
  // console.log(`curr:`, curr);
  // console.log('a soma atual é', acc + curr);

  return acc + curr;
}, 0);

// console.log(soma);

const numbers = [50, 85, -30, 3, 15];

const maiorValor = numbers.reduce((acc, curr) => acc > curr? acc : curr);
// console.log(maiorValor);

// Para fixar ainda mais o conceito de reduce, faça uma função que some todos os números pares do array numbers:

const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const somaPar = numbers2.reduce((acc, curr) => curr % 2 === 0? acc + curr : acc);
// console.log(somaPar);

// Agora, crie uma função usando dados de estudantes, para mostrar na tela um relatório que diz em qual matéria a pessoa foi melhor. Você usará tanto o map quanto o reduce dentro dele!

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

// const estudanteMaterias = estudantes.reduce((acc, curr) => (acc.nota > curr.nota ? acc : curr));

// console.log(estudanteMaterias);

const reportBest = (students) => students.map((student) => ({
  name: student.nome,
  materia: student.materias
    .reduce((acc, materia) => (acc.nota > materia.nota) ? acc : materia).name,
}));

// console.log(reportBest(estudantes));

// A tabela abaixo mostra um resumo de como funcionam as HOFs que você aprendeu até agora. Use o seguinte array para visualizar os exemplos da tabela:

const pessoas = [
  { nome: 'Joana', idade: 37 },
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 32 },
  { nome: 'Aline', idade: 28 },
];

// forEach:

const paraCada = pessoas.forEach((pessoa) => console.log(pessoa.nome));

// find:

const encontre = pessoas.find((pessoa) => pessoa.nome === 'Aline');
console.log(encontre);

// some:

const algum = pessoas.some((pessoa) => pessoa.idade > 30);
console.log(algum);

// every:

const todos = pessoas.every((pessoa) => pessoa.idade > 30);
console.log(todos);

// sort:

const ordenar = pessoas.sort((a, b) => a.idade - b.idade);
console.log(ordenar);

// map:

const mapeia = pessoas.map((pessoa) => pessoa.nome);
console.log(mapeia);

// filter:

const filtra = pessoas.filter((pessoa) => pessoa.idade > 30);
console.log(filtra);

// reduce: 

const reduz = pessoas.reduce((acc, curr) => acc + curr.idade, 0);
console.log(reduz);