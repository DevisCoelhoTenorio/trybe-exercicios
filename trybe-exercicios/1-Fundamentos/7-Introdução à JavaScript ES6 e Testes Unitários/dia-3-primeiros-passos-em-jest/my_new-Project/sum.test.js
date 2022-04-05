const sum =require('./sum');

test('Soma de 4 e 5 = 9', () => {
  expect(sum(4,5)).toEqual(9);
});
