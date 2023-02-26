const createItem = require('./createItem');
describe('a função createItem', () => {
  it('cria um item válido', () => {
    const expected = { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 };
    const parametros = createItem('banana', 'kg', 1.99, 20);
    expect(expected).toEqual(parametros);
  });
  it('utiliza zero como quantidade padrão', () => {
    const parametros = createItem('banana', 'kg', 1.99);
    expect(parametros).toHaveProperty('quantity', 0);
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow();
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem(2, 'kg', 1.99, 20)).toThrow(new Error('O nome do item deve ser uma string'));
  });
  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem('banana', 'kg', -1.99, 20)).toThrow(new Error('O preço do item deve ser maior que zero'));
  });
  it('Lança um erro se o preço é zero', () => {
    expect(() => createItem('banana', 'kg', 0, 20)).toThrow(new Error('O preço do item deve ser maior que zero'));
  });
});