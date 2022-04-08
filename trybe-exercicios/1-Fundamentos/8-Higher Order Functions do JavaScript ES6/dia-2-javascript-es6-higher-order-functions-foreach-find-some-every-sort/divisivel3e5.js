const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  const num = numbers.find((valor) => valor % 3 === 0 && valor % 5 ===0 );
  return num;
}

console.log(findDivisibleBy3And5())