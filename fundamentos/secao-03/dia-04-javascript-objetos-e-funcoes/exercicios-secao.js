// Exercicio 1

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//   console.log ('Bem-vinda, ' + info.personagem);


// Exercicio 2

info.recorrente = 'Sim';

// console.log(info.recorrente);


// Exercicio 3

// for (chave in info) {
//     console.log(chave);
// }


// Exercicio 4

// for (chave in info) {
//     console.log(info[chave]);
// }


// Exercicio 5

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente:'Sim',
};


// for (chave in info && info2) {
//     if (
//         chave === 'recorrente' &&
//         info[chave] === 'Sim' &&
//         info2[chave] === 'Sim'
//     ) {
//         console.log('Ambos recorrentes');
//     } else {
//         console.log (info[chave] + ' e ' + info2[chave]);
//     }
// }


// Exercicio 6

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

// console.log ("O livro favorito de " + leitor.nome + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);


// Exercicio 7

leitor.livrosFavoritos[1] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
    },

// console.log (leitor);


// Exercicio 8

console.log ('Julia tem ' + leitor.livrosFavoritos.length + ' livros favoritos');

