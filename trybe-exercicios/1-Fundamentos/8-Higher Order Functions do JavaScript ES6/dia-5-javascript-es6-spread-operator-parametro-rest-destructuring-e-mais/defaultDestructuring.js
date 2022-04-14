const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality = 'Coreano' } = person;

//   console.log(nationality || 'sem nacionalidade');

console.log(nationality);

const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0
// const numeros = [1,2,3,4,5,6];

// const sum1 = (...param) => param.reduce((acc, valor) => acc + valor, 0);
// console.log(sum1(numeros));

// const sum = (param) => param.reduce((acc, valor) => acc + valor, 0);
// console.log(sum(numeros));