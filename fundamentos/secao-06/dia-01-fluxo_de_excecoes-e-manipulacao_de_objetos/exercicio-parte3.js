const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

function adicionaChave(objeto, chave, valor) {
  objeto[chave] = valor;
}

adicionaChave(lesson2, 'turno', 'noite');

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

function chaves(objeto) {
  return Object.keys(objeto);
}
// Crie uma função para mostrar o tamanho de um objeto.

const tamanho = (objeto) => Object.keys(objeto).length;

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const valores = (objeto) => Object.values(objeto);

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3.

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas

const estudantes = () => {
  const estudantes1 = allLessons.lesson1.numeroEstudantes;
  const estudantes2 = allLessons.lesson2.numeroEstudantes;
  const estudantes3 = allLessons.lesson3.numeroEstudantes;

  console.log(estudantes1 + estudantes2 + estudantes3);
}

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const valorDaChave = (objeto, chave) => Object.values(objeto)[chave];

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave

const verifica = (objeto, chave, valor) => {
  let verificacao = false;
  const verificaChave = Object.keys(objeto).includes(chave);
  const verificaValor = Object.values(objeto).includes(valor);
  if (verificaChave === true && verificaValor === true) {
    verificacao = true;
    return verificacao;
  }
};

// Exemplo gabarito

// const verifica = (objeto, chave, valor) => {
//   const chaveValor = Object.entries(objeto);
//   let verificacao = false;
//   for (let index in chaveValor) {
//     if (chaveValor[index][0] === chave && chaveValor[index][1] === valor) {
//       verificacao = true;
//     }
//   }
//   return verificacao;
// };

// console.log(verifica(lesson1,'materia', 'Matemática'));

// Bonus
// Utilizando o objeto (allLesson), crie uma função para contar quantos estudantes assistiram às aulas de Matemática

const aulasMatematica = () => {
  let totalEstudantes = 0;
  const chaves = Object.keys(allLessons);
  for (let index in chaves) {
    if (allLessons[chaves[index]].materia === 'Matemática'){
      totalEstudantes += allLessons[chaves[index]].numeroEstudantes;
    }
  }
  return totalEstudantes;
}
// console.log(aulasMatematica());

// Utilizando o objeto (allLesson), crie uma função que deva retornar um objeto que represente o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes

const relatorio = (objeto, name) => {
  const materias = [];
  const professor = name;
  let alunos = 0;
  const values = Object.values(objeto);

  for (let index in values) {
    if (values[index].professor === name) {
      materias.push(values[index].materia);
      alunos += values[index].numeroEstudantes;
    }
  }
  return { professor: name, aulas: materias, estudantes: alunos };
}
console.log(relatorio(allLessons, 'Maria Clara'));