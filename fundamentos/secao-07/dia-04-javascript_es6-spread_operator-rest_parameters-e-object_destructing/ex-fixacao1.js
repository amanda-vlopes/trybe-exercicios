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

console.log(fruitSalad(specialFruit, additionalItens));