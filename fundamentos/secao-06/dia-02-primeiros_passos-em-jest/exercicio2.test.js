const myFizzBuzz = require('./exercicio2');

describe ('teste função myFizzBuzz', () => {
  it('Retorne a string [\'fizzbuzz\'] quando é passado o parâmetro 15 para a função', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Retorne a string [\'fizz\'] quando é passado o parâmetro 9 para a função', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('Retorne a string [\'buzz\'] quando é passado o parâmetro 20 para a função', () => {
    expect(myFizzBuzz(20)).toBe('buzz');
  });

  it('Retorne o próprio número quando o parâmetro passado não for divisível nem por 5 nem por 3', () => {
    expect(myFizzBuzz(13)).toBe(13);
  });

  it('Retorne false se o parâmetro passado não for um número', () => {
    expect(myFizzBuzz('5')).toBe(false);
  });
});
