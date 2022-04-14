const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const par = (numero1) => numero1 % 2 ===0;
// const soma = (valor, numero) => valor + numero;

// const somaPar = (array) => array.filter(par).reduce(soma);

// console.log(somaPar(numbers));


// Ou 

const sumaPar = (valor, numero) => ((numero % 2 === 0) ? valor + numero : valor);

const soma = (array) => array.reduce(sumaPar,0);

console.log(soma(numbers));