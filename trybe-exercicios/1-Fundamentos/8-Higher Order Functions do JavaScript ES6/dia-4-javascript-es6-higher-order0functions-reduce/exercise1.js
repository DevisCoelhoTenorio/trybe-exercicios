const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
const flatten = (array) => array.reduce((acc, valor) => acc.concat(valor),[]);

console.log(flatten(arrays));