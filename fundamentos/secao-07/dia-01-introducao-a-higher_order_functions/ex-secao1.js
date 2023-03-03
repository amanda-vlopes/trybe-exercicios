// Exercicios seção 7.1

// Parte 1 

// Nova pessoa contratada
// Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada. Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa. Para isso:

// 1 - crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

// 2 - utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.

const pessoasContratadas = (name) => {
  const emailPessoa = name.toLowerCase().split(' ').join('_');
  const cadastro = { nomeCompleto: name, email: `${emailPessoa}@trybe.com` };
  return cadastro;
}

const newEmployees = (função) => {
  const employees = {
    id1: função('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: função('Luiza Drumond '), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: função('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// console.log(newEmployees(pessoasContratadas));

// Sorteador de loteria

// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

const verificaNumber = (numero, sorteio) => numero === sorteio;

const resultadoSorteiro = (numero, funcao) => { // funcao é a função callback, como é passada uma função como parâmetro isso se torna uma HOF
  const numeroAleatorio = Math.floor((Math.random() * 5) + 1); // adiciona 1 para não aparecer o 0

  return funcao(numero, numeroAleatorio) ? 'Parabéns, você ganhou' : 'Tente novamente';
}

// console.log(resultadoSorteiro(2, verificaNumber));

// Corretor automático de exame
// 
// Crie uma HOF que receberá três parâmetros:

// O primeiro será um array de respostas corretas (soluções);

// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:

// Uma resposta correta adiciona 1 ponto à pontuação final;

// A ausência de uma resposta não altera a pontuação (quando for “N.A”);

// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
let pontuacao = 0;

STUDENT_ANSWERS.forEach((answer, index) => {
  if (answer === RIGHT_ANSWERS[index]) {
    pontuacao += 1;
  } else if (answer === 'N.A') {
    pontuacao = pontuacao;
  } else if (answer !== RIGHT_ANSWERS[index]) {
    pontuacao -= 0.5;
  }
});

// console.log(pontuacao);

// PARTE 2 - Organizando uma biblioteca

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

const anoNascimento = () => {
  let nomeAuthor = '';
  books.find((book) => {
    if (book.author.birthYear === 1947) {
      nomeAuthor = book.author.name;
    }
  });
  return nomeAuthor;
};

// console.log(anoNascimento());

// Retorne o nome do livro com menor número de caracteres (menor nome).

const menorNome = () => {
  let nomeBook;
  books.forEach((book) => {
    if(!nomeBook || book.name.length < nomeBook.length) {
      nomeBook = book.name;
    }
  })
  return nomeBook;
}
// console.log(menorNome());

// Encontre o primeiro livro cujo nome possua 26 caracteres.

const getNameBook = () => {
  let livro;
  books.find((book) => {
    if(book.name.length === 26) {
      livro = book;
    }
  });
  return livro;
};

// console.log(getNameBook());

// Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.

function everyoneWasBornOnSecXX() {
  return books.every((book) => book.author.birthYear >= 1901 && book.author.birthYear <= 2000);
};

// console.log(everyoneWasBornOnSecXX());

// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

const someBookWasReleaseOnThe80s = () => {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
};

// console.log(someBookWasReleaseOnThe80s());

// Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.

const authorUnique = () => {
  return books.every((book) =>
  !books.some((bookSome) => 
  (bookSome.author.birthYear === book.author.birthYear) 
  && (bookSome.author.name !== book.author.name)));
};

// console.log(authorUnique());