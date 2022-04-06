const sum =require('./sum');

describe('Testa a função suma', () => {
test('Deve retornar o resultado da soma', () => {
  expect(sum(4,5)).toEqual(9);
  expect(sum(0,0)).toEqual(0);
  });

test('input 4 e "5" esperado Erro', () => {
  expect(() => sum(4, "5")).toThrowError();
  expect(() => sum(4, "5")).toThrowError('parameters must be numbers');
  });
});