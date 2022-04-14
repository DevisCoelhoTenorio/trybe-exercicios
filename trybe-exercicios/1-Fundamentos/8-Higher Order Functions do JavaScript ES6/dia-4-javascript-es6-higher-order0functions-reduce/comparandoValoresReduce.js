const numbers = [50, 85, -30, 3, 15];
let max = 0;
for (valor of numbers){
  if(valor > max) max = valor;
}
console.log(max);

const pegarMaior = (maior,numero) =>((maior > numero) ? maior : numero);

const maior = numbers.reduce(pegarMaior, 100);
console.log(maior);