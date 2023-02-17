let pessoaEstudante = {};

const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
  objeto[novaPropriedade] = valor;
};

let novaChave = 'Nome';
const nome = 'Amanda';
adicionaPropriedade(pessoaEstudante, novaChave, nome);

novaChave = 'Sobrenome';
const sobrenome = 'Lopes'
adicionaPropriedade(pessoaEstudante, novaChave, sobrenome);

novaChave = 'Email';
const email = 'amandavitor@hotmail.com';
adicionaPropriedade(pessoaEstudante,novaChave, email);

novaChave = 'GitHub';
const github = 'amandav-lopes';
adicionaPropriedade(pessoaEstudante, novaChave, github);

console.log(pessoaEstudante);