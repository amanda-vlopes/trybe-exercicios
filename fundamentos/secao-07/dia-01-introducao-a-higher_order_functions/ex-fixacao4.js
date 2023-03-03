const pessoas = [
  { nome: 'Joana', idade: 37 },
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 32 },
  { nome: 'Aline', idade: 28 },
];

// forEach

pessoas.forEach((pessoa) => console.log(`Nome: ${pessoa.nome}`));

// find

const encontrandoPessoa = pessoas.find((pessoa) => pessoa.nome === 'Aline');
console.log(encontrandoPessoa);

// some

const verificaIdade = pessoas.some((pessoa) => pessoa.idade > 30);
console.log(verificaIdade);

// every 

const verficiaTodasIdades = pessoas.every((pessoa) => pessoa.idade > 30);
console.log(verficiaTodasIdades);