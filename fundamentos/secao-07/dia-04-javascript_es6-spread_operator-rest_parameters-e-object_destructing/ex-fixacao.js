// Para fixar - Spread Operator

// Faça uma função chamada fruitSalad, passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread.

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['mamão', 'banana', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['melão', 'abacaxi', 'manga'];

const fruitSalad = (fruit, additional) => {
  const frutasQueGosto = [...fruit, ...additional];
  return frutasQueGosto;
};

// console.log(fruitSalad(specialFruit, additionalItens));

// Para fixar - Object Destructuring

// Crie um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos.

// Existem dois objetos referentes a uma pessoa usuária, um com informações pessoais e outro com informações referentes ao seu cargo na empresa trappistEnterprise. Você precisa criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.


const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const usuario = {...user, ...jobInfos};

const { name: nome, age, nationality, profession, squad, squadInitials } = usuario;

const phrase = `Hi, my name is ${nome}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`

console.log(phrase);