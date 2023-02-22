const techList = (array, nome) => {
  const arrayOrdenado = array.sort();
  if (array.length === 0) {
    return 'Vazio!';
  }
  let arrayObjetos = [];
  for (let index = 0; index < arrayOrdenado.length; index += 1) {
    arrayObjetos.push({ tech: arrayOrdenado[index], name: nome });
  }
  return arrayObjetos;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = techList;