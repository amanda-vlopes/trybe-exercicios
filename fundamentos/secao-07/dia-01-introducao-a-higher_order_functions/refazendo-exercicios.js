// Parte I
// 1 - Nova pessoa contratada

const newEmployees = (funcao) => {
  const employees = {
    id1: funcao('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: funcao('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: funcao('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const employee = (nomeCompleto) => {
  const nomeEmail = nomeCompleto.toLowerCase().split(' ').join('_');
  return { nomeCompleto, email: `${nomeEmail}@trybe.com`}
};

// console.log(newEmployees(employee));

// 2 - Sorteador de loteria 

// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

const checaNumero = (numero, numeroApostado) => numero === numeroApostado; // retorna false ou true

const verificaNumber = (number, verificacao) => {
  const numeroAleatorio = Math.floor((Math.random() * 5) + 1);
  return verificacao(number, numeroAleatorio) ? 'Parabéns, você ganhou' : 'Tente novamente';
}

// console.log(verificaNumber(5,checaNumero));

// 3 - Corretor automático de exame

// Crie uma HOF que receberá três parâmetros

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// Forma 1

const verificaResposta = (respostaCerta, respostaAluno) => {
  let resultado = 0;
  respostaAluno.forEach((answer, index) => {
    if(answer === respostaCerta[index]) {
      resultado += 1;
    } else if (answer === 'N.A') {
      resultado + 0;
    } else {
      resultado -= 0.5;
    }
  });
  return resultado;
}

const corrigeProva = (gabarito, respostasAluno, correcao) => correcao(gabarito, respostasAluno);

// Forma 2

const verificaResposta2 = (respostaCerta, respostaAluno) => {
    if(respostaAluno === respostaCerta) {
      return 1;
    } else if (respostaAluno === 'N.A') {
      return 0;
    } 
    return -0.5;
}

const corrigeProva2 = (gabarito, respostasAluno, correcao) => {
  let resultado = 0;
  respostasAluno.forEach((answer, index) => {
    resultado += correcao(gabarito[index], answer);
  })
  return `O seu resultado foi ${resultado}`;
};

// console.log(corrigeProva(RIGHT_ANSWERS, STUDENT_ANSWERS, verificaResposta));
// console.log(corrigeProva2(RIGHT_ANSWERS, STUDENT_ANSWERS, verificaResposta2));

// PARTE II

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

// Adicione o código do exercício aqui:

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947. // Resultado: 'Stephen King'

const authorBornIn1947 = () => books.find((book) => book.author.birthYear === 1947).author.name;

// console.log(authorBornIn1947());

// 2 - Retorne o nome do livro com menor número de caracteres (menor nome).  // Resultado: 'Duna'

// Forma 1
const smallerName = () => {
  let nameBook;
  books.forEach((book) => {
    if(!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  })
  return nameBook;
}

// Forma 2 - com reduce

const smallerName2 = () => books.reduce((livro1, livro2) => livro1.name.length < livro2.name.length ? livro1 : livro2).name;

// console.log(smallerName());
// console.log(smallerName2());

// 3 - Encontre o primeiro livro cujo nome possua 26 caracteres.

// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

const getNamedBook = () => books.find((book) => book.name.length === 26);

console.log(getNamedBook());