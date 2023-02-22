const hydrate = (string) => {
  let arrayPalavra = string.split('');
  let quantosCopos = 0;
  for (let index = 0; index < arrayPalavra.length; index += 1) {
    if(Number(arrayPalavra[index]) > 0) {
    quantosCopos += Number(arrayPalavra[index]);
    }
  }
  if (quantosCopos === 1) {
  return `${quantosCopos} copo de água`;   
  }
  return `${quantosCopos} copos de água`;
}

console.log(hydrate('1 cerveja e 1 vodka'));

module.exports = hydrate;