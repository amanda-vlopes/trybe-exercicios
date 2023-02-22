const { encode, decode } = require('./exercicio3.js');

describe('Testando funções decode e encode', () => {
  it('Verifica se a função encode é definida', () => {
    expect(encode).toBeDefined();
  });

  it('Verifica se a função encode é definida', () => {
    expect(decode).toBeDefined();
  });

  it('Verfica se encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });

  it('Verfica se decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });

  it('Verifica se a vogal a é convertida em 1', () => {
    expect(encode('amar')).toEqual('1m1r');
  });

  it('Verifica se a vogal e é convertida em 2', () => {
    expect(encode('tente')).toEqual('t2nt2');
  });

  it('Verifica se a vogal i é convertida em 3', () => {
    expect(encode('tititi')).toEqual('t3t3t3');
  });

  it('Verifica se a vogal o é convertida em 4', () => {
    expect(encode('ovo')).toEqual('4v4');
  });

  it('Verifica se a vogal u é convertida em 5', () => {
    expect(encode('uluru')).toEqual('5l5r5');
  });

  it('Verifica se o número 1 é convertido na vogal a', () => {
    expect(decode('1m1r')).toEqual('amar');
  });

  it('Verifica se o número 2 é convertido na vogal e', () => {
    expect(decode('t2nt2')).toEqual('tente');
  });

  it('Verifica se o número 3 é convertido na vogal i', () => {
    expect(decode('t3t3t3')).toEqual('tititi');
  });

  it('Verifica se o número 4 é convertido na vogal o', () => {
    expect(decode('4v4')).toEqual('ovo');
  });

  it('Verifica se o número 5 é convertido na vogal u', () => {
    expect(decode('5l5r5')).toEqual('uluru');
  });

  it('Verifica se a string retornada pela função tem o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('teste').length).toEqual(5);
  });

  it('Verifica se a string retornada pela função tem o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(decode('t2st2').length).toEqual(5);
  });
});